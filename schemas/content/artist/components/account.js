import link from "../../../fields/link"

export default [
  {
    group: 'account',
    name: 'name',
    title: 'Name',
    type: 'string',
  },   
  {
    group: 'account',
    name: 'photo',
    title: 'Photo',
    type: 'image',
    options: {
      accept: ['image/png', 'image/jpeg']
    }
  },          
  {
    group: 'account',
    name: 'links',
    title: 'Links',
    type: 'array',
    of: [link]
  }
]