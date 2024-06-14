import link from "../fields/link"
import blocks from "../fields/blocks"
import blog_theme from "./artist/components/blog_theme"

export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  groups: [
    {
      name: 'navigation',
      title: 'Navigation',
      default: true,
    },
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'blog_theme',
      title: 'Theme',
    },      
  ],  
  fields: [
    ...blog_theme,
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      hidden: true,
    },
    {
      group: 'navigation',
      name: 'navigation',
      title: 'Navigation',
      type: 'object',
      fields: [
        {
          name: 'links',
          title: 'Links',
          type: 'array',
          of: [link]          
        },
        {
          name: 'badges',
          title: 'Badges',
          type: 'array',
          of: [{
            type: 'image',
            options: {
              accept: 'image/gif'
            }        
          }]
        }         
      ]

    },
    {
      group: 'content',
      name: 'welcome',
      title: 'Welcome',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },    
        blocks
      ]

    },
    {
      group: 'content',
      name: 'roster',
      title: 'Roster',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        }
      ]

    },    
    {
      group: 'content',
      name: 'about',
      title: 'About',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },        
        blocks
      ]

    },   
  ]
}