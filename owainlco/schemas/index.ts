import RichTextEditor from "../lib/rich-text-editor";

export const schemaTypes = [
  {
    name: 'author',
    type: 'document',
    fields: [
      {name: 'name', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'image', type: 'image'},
      {name: 'bio', type: 'array', of: [RichTextEditor]},
    ],
  },
  {
    name: 'bookAuthor',
    type: 'document',
    fields: [
      {name: 'name', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'image', type: 'image'},
      {name: 'bio', type: 'array', of: [RichTextEditor]},
      {name: 'url', type: 'url'},
    ],
  },
  {
    name: 'post',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'author', type: 'reference', to: [{type: 'author'}]},
      {name: 'mainImage', type: 'image'},
      {name: 'categories', type: 'array', of: [{type: 'reference', to: [{type: 'category'}]}]},
      {name: 'excerpt', type: 'array', of: [RichTextEditor]},
      {name: 'body', type: 'array', of: [RichTextEditor]
      },
      {name: 'publishedAt', type: 'datetime'}
    ],
  },
  {
    name: 'category',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'description', type: 'text'},
    ],
  },
  {
    name: 'genre',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'description', type: 'text'},
    ],
  },
  {
    name: 'page',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'body', type: 'array', of: [RichTextEditor]},
      {name: 'publishedAt', type: 'datetime'},
      {name: 'excerpt', type: 'array', of: [RichTextEditor]},
    ],
  },
  {
    name: 'book',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'author', type: 'reference', to: [{type: 'author'}]},
      {name: 'bookAuthor', type: 'reference', to: [{type: 'bookAuthor'}]},
      {name: 'genre', type: 'reference', to: [{type: 'genre'}]},
      {name: 'mainImage', type: 'image'},
      {name: 'publishedAt', type: 'datetime'},
      {name: 'excerpt', type: 'array', of: [RichTextEditor]},
      {name: 'body', type: 'array', of: [RichTextEditor]},
      {name: 'chapters', type: 'array', of: [{type: 'reference', to: [{type: 'chapter'}]}]},
    ],
  },
  {
    name: 'chapter',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'body', type: 'array', of: [RichTextEditor]},
      {name: 'quote', type: 'string'},
    ],
  }
]
