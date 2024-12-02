export default {
  type: 'image',
  fields: [
    {
      name: 'alt',
      type: 'string',
      title: 'Alternative text',
      description: 'Important for SEO and accessiblity.',
      options: {
        isHighlighted: true,
      },
    },
    {
      title: 'Image Size',
      name: 'size',
      type: 'string',
      initialValue: '300',
      description: 'The Small (300px) image size is best for posts.',
      options: {
        list: [
          { title: 'Small (300px)', value: '300' },
          { title: 'Medium (500px)', value: '500' },
          { title: 'Large (700px)',  value: '700' },
        ],
      },
      validation: rule => rule.required(),
    },    
  ],
}