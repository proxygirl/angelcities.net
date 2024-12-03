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
    title: 'Icon',
    name: 'icon',
    type: 'icon',
  },      
  {
    group: 'account',
    name: 'photo',
    title: 'Photo',
    type: 'image',
    options: {
      accept: 'image/png, image/jpeg, , image/jpg, , image/gif'
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