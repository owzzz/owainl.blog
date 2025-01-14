export const schemaTypes = [
  {
    name: 'author',
    type: 'document',
    fields: [
      {name: 'name', type: 'string'},
      {name: 'slug', type: 'slug'},
      {name: 'image', type: 'image'},
      {name: 'bio', type: 'array', of: [{type: 'block'}]},
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
      {name: 'excerpt', type: 'array', of: [{type: 'block'}]},
      {name: 'body', type: 'array', of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' }
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
              { title: 'Underline', value: 'underline' },
              { title: 'Italic', value: 'italic' },
              { title: 'Strike', value: 'strike' },
              { title: 'Highlight', value: 'highlight' },
              { title: 'Superscript', value: 'superscript' },
              { title: 'Subscript', value: 'subscript' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [{ title: 'URL', name: 'href', type: 'url' }]
              }
            ]
          }
        }]
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
      {name: 'body', type: 'array', of: [{type: 'block'}]},
      {name: 'publishedAt', type: 'datetime'},
      {name: 'excerpt', type: 'array', of: [{type: 'block'}]},
    ],
  }
]