import blocks from "../fields/blocks"

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },     
		{
		  name: 'author',
      type: 'reference',
			title: 'Author',
      to: [{type: 'artist' }]
    },    
    blocks
  ],
}