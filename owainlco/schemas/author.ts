import RichTextEditor from "../lib/rich-text-editor"

export default {
  name: 'author',
  type: 'document',
  fields: [
    {name: 'name', type: 'string'},
    {name: 'slug', type: 'slug'},
    {name: 'image', type: 'image'},
    {name: 'bio', type: 'array', of: [RichTextEditor]},
  ],
}