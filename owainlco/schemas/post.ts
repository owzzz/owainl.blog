import RichTextEditor from "../lib/rich-text-editor";
import CodeBlock from "../lib/code-block";

export default {
  name: 'post',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug', validation: (Rule: any) => Rule.required()},
    {name: 'author', type: 'reference', to: [{type: 'author'}]},
    {name: 'mainImage', type: 'image'},
    {name: 'categories', type: 'array', of: [{type: 'reference', to: [{type: 'category'}]}]},
    {name: 'excerpt', type: 'array', of: [RichTextEditor, CodeBlock]},
    {name: 'body', type: 'array', of: [RichTextEditor, CodeBlock]},
    {name: 'publishedAt', type: 'datetime'}
  ],
}