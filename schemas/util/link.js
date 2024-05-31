export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: Rule => Rule.uri({allowRelative : true})
    },            
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    }
  ]
} 