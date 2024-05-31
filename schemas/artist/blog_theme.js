import card from '../util/card'
import background from '../util/background'

export default [
  {
    group: 'blog_theme',
    name: 'blog_theme',
    title: 'Blog Theme',
    type: 'object',
    fields: [
      {
        name: 'site',
        title: 'Site',
        type: 'object',
        fields: [background]
      },      
      {
        name: "profile",
        title: `Profile`,
        type: 'object',
        fields: [...card,
          {
            name: 'links',
            title: 'Links',
            type: 'object',
            fields: [            
              background,    
              {
                name: 'link_color',
                title: 'Link Color',
                type: 'color',
              },                              
            ]
          }          
        ]
      },
      {
        name: "currently",
        title: `Currently`,
        type: 'object',
        fields: [...card]
      },
      {
        name: "post",
        title: `Post`,
        type: 'object',
        fields: [...card]
      }            
    ]
  }
]