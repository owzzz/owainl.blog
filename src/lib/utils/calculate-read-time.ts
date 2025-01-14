import type { TypedObject } from '@portabletext/types';

/**
 * Calculates the reading time in minutes for a given text
 * @param text The text content to analyze
 * @param wordsPerMinute Average reading speed (default: 200 words per minute)
 * @returns Reading time in minutes (rounded up to nearest minute)
 */
export function calculateReadTime(blocks: string | TypedObject[]): number {
  if (Array.isArray(blocks)) {
    const text = blocks
      .map(block => 'children' in block ? block.children?.map((child: { text?: string }) => 'text' in child ? child.text : '').join('') : '')
      .join(' ');
    return calculateReadTime(text);
  }
  
  const wordsPerMinute = 200;
  const words = blocks.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}