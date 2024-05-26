export default {
  name: 'background',
  title: 'Background',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'object',
      fields: [
        {
          name: 'file',
          title: 'File',
          type: 'image',              
        },
        {
          name: 'size',
          title: 'Size',
          type: 'number',              
        },            
      ]

    },
    {
      name: 'color',
      title: 'Color',
      type: 'color',
    } 
  ]      
} 