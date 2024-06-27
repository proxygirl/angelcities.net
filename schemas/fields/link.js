export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    {
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: rule => rule.required().uri({allowRelative : true})
    },            
    {
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: rule => rule.required(),
    }
  ]
} 