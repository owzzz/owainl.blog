import { getBook, openai, supabase } from './clients';
import { extractTextFromBlocks } from "../src/lib/utils/extract-text";
import { generateAndSaveAudio } from './generate-audio';

type Recommendation = {
  title: string;
  description: string;
}

export async function generateBookRecommendations(slug: string): Promise<void> {
  if (!slug) {
    throw new Error('A slug is required');
  }

  const book = await getBook(slug);

  if (!book) {
    throw new Error('Book not found');
  }

  const context = extractTextFromBlocks(book.body);

  const prompt = `Context: Below is a blog post titled ${book.title}

Task: Based on the blog post content below, generate 3 related resource suggestions. 
Format each suggestion exactly as shown in this JSON array structure, do not add any additional text or formatting or markdown:
[
  {
    "title": "Resource Title",
    "description": "Brief description (25 words)"
  }
]

Blog Post Content: ${context}`

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  if (!response.choices[0].message.content) {
    throw new Error('No response from OpenAI');
  }

  try {
    const generatedRecommendations = JSON.parse(response.choices[0].message.content);

    const recommendations = generatedRecommendations.map(({ title, description }: Recommendation) => {
      return { title, description, document_id: book._id };
    });

    saveBookRecommendationsToStorage(recommendations);

  } catch (error) {
    console.error('Error parsing JSON:', error);
    throw new Error('Failed to parse JSON response');
  }
}

async function saveBookRecommendationsToStorage(recommendations: Recommendation[]) {
  if (!supabase) {
    throw new Error('Supabase client not initialized');
  }

  const { data, error } = await supabase.from('book_recommendations').insert(recommendations);

  if (error) {
    console.error('Error saving book recommendations to storage:', error);
    throw new Error('Failed to save book recommendations to storage');
  }

  console.log('Book recommendations saved to storage:', data);
}
async function main() {
  const slug = process.argv[2];

  if (!slug) {
    console.error('Usage: npm run generate-book-recommendations <slug>');
    process.exit(1);
  }

  try {
    const content = await getBook(slug)

    if (!content) {
      console.error(`book with slug "${slug}" not found`);
      process.exit(1);
    }

    await generateBookRecommendations(slug);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
}

main(); 
