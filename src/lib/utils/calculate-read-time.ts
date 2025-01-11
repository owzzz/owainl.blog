/**
 * Calculates the reading time in minutes for a given text
 * @param text The text content to analyze
 * @param wordsPerMinute Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes (rounded up to nearest minute)
 */
export function calculateReadTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}