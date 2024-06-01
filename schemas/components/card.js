import color from "../fields/color"
import background from "../fieldsets/background"

const card = ({ hasLinks }) => {

  let bodyFields = [
    background('background', 'Background', {hasImage: true}),
    background('inner_background', 'Inner Background', {hasImage: false}),    
    color('text_color', 'Text Color'),    
  ]

  if (hasLinks) {
    bodyFields.push(color('link_color', 'Link Color'))
  }

  return [
    {
      name: 'header',
      title: 'Header',
      type: 'object',
      fields: [
        background('background', 'Background', {hasImage: false}),
        color('text_color', 'Text Color'), 
      ],
      initialValue: {
        background: "#FFFFFF"
      }
    },            
    {
      name: 'body',
      title: 'Body',
      type: 'object',
      fields: bodyFields
    }                                     
  ]

}

export default card
