export default {
  name: 'quote',
  type: 'document',
  fields: [
    {name: 'quote', type: 'string'},
    {name: 'bookAuthor', type: 'reference', to: [{type: 'bookAuthor'}]},
    {name: 'link', type: 'url'},
  ],
}