import card from "./util/card"
import background from "./util/background"

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'blog',
      title: 'Blog',
    },
    {
      name: 'blog_theme',
      title: 'Blog Theme',
    },      
  ],   
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
    },
    {
      name: 'welcome',
      title: 'Welcome Message',
      type: 'text',
    },
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
          name: 'welcome',
          title: 'Welcome',
          type: 'object',
          fields: [...card]
        },
        {
          name: 'roster',
          title: 'Roster',
          type: 'object',
          fields: [...card]
        } 
      ]
    }   
  ]
}