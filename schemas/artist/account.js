import link from '../util/link'

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
  },          
  {
    group: 'account',
    name: 'links',
    title: 'Links',
    type: 'array',
    of: [link]
  }
]