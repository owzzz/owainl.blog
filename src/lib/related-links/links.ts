import { openai } from "$lib/openai/client.server";
import RelatedLink from "./model";
export async function getRelatedLinks(title: string, context: string): Promise<RelatedLink[]> {
  if (!context) {
    throw new Error('Slug is required');
  }

  const prompt = `Context: Below is a blog post titled ${title}

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
    const generatedLinks = JSON.parse(response.choices[0].message.content);

    const relatedLinks = generatedLinks.map(({ title, description }: { title: string, description: string}) => {
      return { title, description };
    });

    return relatedLinks;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    throw new Error('Failed to parse JSON response');
  }
}
