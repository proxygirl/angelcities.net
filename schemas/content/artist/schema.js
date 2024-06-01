import {UsersIcon} from '@sanity/icons'

import account from './components/account'
import blog from './components/blog'
import blog_theme from './components/blog_theme'


export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: UsersIcon,
  groups: [
    {
      name: 'account',
      title: 'Account',
      default: true,
    },
    {
      name: 'blog',
      title: 'Blog',
    },
    {
      name: 'blog_theme',
      title: 'Blog Theme',
    },      
  ],  
  fields: [...account, ...blog, ...blog_theme],
}