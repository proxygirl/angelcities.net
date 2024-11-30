export default {
  name: 'embed',
  title: 'Embed',
  type: 'object',
  fields: [
    {
      name: 'embed',
      title: 'Embed Code',
      type: 'string',
      validation: rule => rule.required()
    },            
  ]
} 