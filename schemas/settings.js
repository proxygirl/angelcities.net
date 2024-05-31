import card from "./util/card"
import background from "./util/background"

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
    },
    {
      name: 'welcome',
      title: 'Welcome',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },        
        {
          name: 'body',
          title: 'Body', 
          type: 'array', 
          of: [
            {type: 'block'},
          ]
        }      
      ]

    } 
  ]
}