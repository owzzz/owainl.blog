import RichTextEditor from "../lib/rich-text-editor";
import CodeBlock from "../lib/code-block";

export default {
  name: 'bookAuthor',
  type: 'document',
  fields: [
    {name: 'name', type: 'string'},
    {name: 'slug', type: 'slug'},
    {name: 'image', type: 'image'},
    {name: 'bio', type: 'array', of: [RichTextEditor, CodeBlock]},
    {name: 'url', type: 'url'},
  ],
}