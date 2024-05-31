import background from "./background"

export default [
  {
    name: 'header',
    title: 'Header',
    type: 'object',
    fields: [
      {
        name: 'background',
        title: 'Background',
        type: 'color',
      },
      {
        name: 'text_color',
        title: 'Text Color',
        type: 'color',
      }                   
    ],
    initialValue: {
      background: "#FFFFFF"
    }
  },            
  {
    name: 'body',
    title: 'Body',
    type: 'object',
    fields: [            
      background,
      {
        name: 'inner_background',
        title: 'Inner Background',
        type: 'color',
      },      
      {
        name: 'text_color',
        title: 'Text Color',
        type: 'color',
      },
      {
        name: 'link_color',
        title: 'Link Color',
        type: 'color',
      },                              
    ]
  }                                     
]   