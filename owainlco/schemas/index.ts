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
    name: 'page',
    type: 'document',
    fields: [
      {name: 'title', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'body', type: 'array', of: [RichTextEditor]},
      {name: 'publishedAt', type: 'datetime'},
      {name: 'excerpt', type: 'array', of: [RichTextEditor]},
    ],
  }
]