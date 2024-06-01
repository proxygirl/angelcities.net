import link from "../../../fields/link"

export default [
  {
    group: 'blog',
    name: 'blog',
    title: 'Blog',
    type: 'object',
    fields: [
      {
        name: 'profile',
        title: 'Profile',
        type: 'object',
        fields: [     
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },      
          {
            name: 'pronouns',
            title: 'Pronouns',
            type: 'string',
          },
          {
            name: 'location',
            title: 'Location',
            type: 'string',
          },
          {
            name: 'bio',
            title: 'Bio',
            type: 'text',
            validation: rule => rule.max(110)
          },     
        ]
      },
      {
        name: 'currently',
        title: 'Currently I am...',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'activity',
                title: 'Activity',
                type: 'string',
              },
              link           
            ]
          }        
        ]
      }      
    ]         
  }
]
