export default {
    type: 'block',
    styles: [
      { title: 'Normal', value: 'normal' },
      { title: 'H1', value: 'h1' },
      { title: 'H2', value: 'h2' },
      { title: 'H3', value: 'h3' },
      { title: 'H4', value: 'h4' },
      { title: 'H5', value: 'h5' },
      { title: 'H6', value: 'h6' },
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
  }