import color from '../../../fields/color'
import background from '../../../fieldsets/background'
import card from '../../../components/card'

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
        fields: [
          background('background', 'Background', {hasImage: true}),
        ]
      },      
      {
        name: "profile",
        title: `Profile`,
        type: 'object',
        fields: [...card({hasLinks: false}),
          {
            name: 'links',
            title: 'Links',
            type: 'object',
            fields: [            
              background('background', 'Background', {hasImage: true}),
              color('link_color', 'Link Color')                           
            ]
          }          
        ]
      },
      {
        name: "currently",
        title: `Currently`,
        type: 'object',
        fields: [...card({hasLinks: true})]
      },
      {
        name: "post",
        title: `Post`,
        type: 'object',
        fields: [...card({hasLinks: true})]
      }            
    ]
  }
]