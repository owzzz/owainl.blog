import { getPost, getBook } from './clients';
import { extractTextFromBlocks } from '../src/lib/utils/extract-text';
import fs from 'fs/promises';
import path from 'path';
import { openai } from './clients';
import { supabase } from './clients'; 

const MAX_CHARS = 4000;
const AUDIO_DIR = path.join(process.cwd(), 'static', 'audio');

async function generateAudioChunk(text: string) {
  const mp3Response = await openai.audio.speech.create({
    model: "tts-1",
    voice: "alloy",
    input: text,
  });
  return mp3Response.arrayBuffer();
}

function splitTextIntoChunks(text: string): string[] {
  const chunks: string[] = [];
  let currentChunk = '';
  const sentences = text.split(/(?<=[.!?])\s+/);

  for (const sentence of sentences) {
    if ((currentChunk + sentence).length > MAX_CHARS) {
      chunks.push(currentChunk.trim());
      currentChunk = sentence;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + sentence;
    }
  }

  if (currentChunk) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

async function generateAndSaveAudio(slug: string, content: any, type: 'book' | 'post' = 'post') {
  try {
    // Create audio directory if it doesn't exist
    await fs.mkdir(path.join(AUDIO_DIR, type + 's'), { recursive: true });
    const outputPath = path.join(AUDIO_DIR, type + 's', `${slug}.mp3`);

    // Generate text content
    let text = '';
    if (type === 'book') {
      const bodyText = extractTextFromBlocks(content.body);
      const chaptersText = content.chapters?.map(chapter => 
        extractTextFromBlocks(chapter.body)
      ).join('\n\n') || '';
      
      text = [bodyText, chaptersText].join('\n\n');
    } else {
      text = extractTextFromBlocks(content.body);
    }

    // Split and generate audio
    const chunks = splitTextIntoChunks(text);
    console.log(`Processing ${type} "${slug}" in ${chunks.length} chunks...`);

    const audioBuffers = await Promise.all(
      chunks.map(chunk => generateAudioChunk(chunk))
    );

    // Combine audio buffers
    const totalLength = audioBuffers.reduce((acc, buffer) => acc + buffer.byteLength, 0);
    const combinedBuffer = new Uint8Array(totalLength);
    let offset = 0;

    audioBuffers.forEach(buffer => {
      combinedBuffer.set(new Uint8Array(buffer), offset);
      offset += buffer.byteLength;
    });

    // Save to file
    await fs.writeFile(outputPath, Buffer.from(combinedBuffer));
    console.log(`Audio saved to ${outputPath}`);

    const { error: uploadError } = await supabase
      .storage
      .from('text-to-speech')
      .upload(`${type}s/${slug}.mp3`, combinedBuffer, {
        contentType: 'audio/mpeg',
        cacheControl: '3600',
        upsert: true
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }

    console.log(`Audio uploaded to Supabase for ${type} "${slug}"`);
  } catch (err) {
    console.error(`Error processing ${type} "${slug}":`, err);
    throw err;
  }
}

async function main() {
  const type = process.argv[2] as 'book' | 'post';
  const slug = process.argv[3];

  if (!type || !slug || !['book', 'post'].includes(type)) {
    console.error('Usage: npm run generate-audio <book|post> <slug>');
    process.exit(1);
  }

  try {
    const content = type === 'book' 
      ? await getBook(slug)
      : await getPost(slug);

    if (!content) {
      console.error(`${type} with slug "${slug}" not found`);
      process.exit(1);
    }

    await generateAndSaveAudio(slug, content, type);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main(); 