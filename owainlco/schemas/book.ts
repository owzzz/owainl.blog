import RichTextEditor from "../lib/rich-text-editor";
import CodeBlock from "../lib/code-block";
export default {
  name: 'book',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'currentlyReading', type: 'boolean'}, 
    {name: 'slug', type: 'slug'},
    {name: 'author', type: 'reference', to: [{type: 'author'}]},
    {name: 'bookAuthor', type: 'reference', to: [{type: 'bookAuthor'}]},
    {name: 'genre', type: 'reference', to: [{type: 'genre'}]},
    {name: 'quote', type: 'reference', to: [{type: 'quote'}]},
    {name: 'mainImage', type: 'image'},
    {name: 'publishedAt', type: 'datetime'},
    {name: 'excerpt', type: 'array', of: [RichTextEditor, CodeBlock]},
    {name: 'body', type: 'array', of: [RichTextEditor, CodeBlock]},
    {name: 'chapters', type: 'array', of: [{type: 'reference', to: [{type: 'chapter'}]}]},
  ],
}