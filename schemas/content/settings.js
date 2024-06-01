import blocks from "../fields/blocks"

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
        blocks
      ]

    },
    {
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

    }     
  ]
}