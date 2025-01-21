import type { PortableTextBlock } from '@portabletext/types';

export function extractTextFromBlocks(blocks: PortableTextBlock[] = []): string {
  return blocks
    .map(block => {
      if ('children' in block) {
        return block.children
          ?.map(child => ('text' in child ? child.text : ''))
          .join(' ');
      }
      return '';
    })
    .join('\n\n')
    .trim();
} 