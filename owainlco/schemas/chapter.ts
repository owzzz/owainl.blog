import RichTextEditor from "../lib/rich-text-editor";
import CodeBlock from "../lib/code-block";
export default {
  name: 'chapter',
  type: 'document',
  fields: [
    {name: 'title', type: 'string'},
    {name: 'slug', type: 'slug'},
    {name: 'body', type: 'array', of: [RichTextEditor, CodeBlock]},
    {name: 'quote', type: 'reference', to: [{type: 'quote'}]},
  ],
}