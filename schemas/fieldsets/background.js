const background = (name, title, { hasImage = false }) => {

  let fields = []

  if(hasImage) {fields.push({
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
  })}

  fields.push({
    name: 'color',
    title: 'Color',
    type: 'color',
  })

  return {
    name: name,
    title: title,
    type: 'object',
    fields: fields     
  } 

}

export default background


