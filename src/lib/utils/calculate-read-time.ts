/**
 * Calculates the reading time in minutes for a given text
 * @param text The text content to analyze
 * @param wordsPerMinute Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes (rounded up to nearest minute)
 */
function extractBlockText(blocks: any[] = []) {
  return blocks?.map((block: { children?: { text?: string }[] }) => 
    'children' in block ? block.children?.map((child: { text?: string }) => 
      'text' in child ? child.text : ''
    ).join('') : ''
  ).join(' ') || '';
}

export function calculateReadTime(content: any) {
  if (!content) return 0;

  if (content._type === 'book') {
    const bodyText = extractBlockText(content.body);
    const excerptText = extractBlockText(content.excerpt);
    const chaptersText = content.chapters?.map(chapter => 
      extractBlockText(chapter.body)
    ).join(' ') || '';

    return calculate(bodyText + ' ' + excerptText + ' ' + chaptersText);
  }

  if (content._type === 'post') {
    const bodyText = extractBlockText(content.body);
    const excerptText = extractBlockText(content.excerpt);

    return calculate(bodyText + ' ' + excerptText);
  }

  return 0;
}

function calculate(text: string): number {
  const wordsPerMinute = 200;
  const words = text.trim().split(/\s+/).length;

  return Math.ceil(words / wordsPerMinute);
}