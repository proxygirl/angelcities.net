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
    {
      title: 'Body', 
      name: 'body',
      type: 'array', 
      of: [
        {type: 'block'},
        {
          type: 'image',
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
                description: 'Important for SEO and accessiblity.',
                  options: {
                    isHighlighted: true,
                },
              },
            ],
        }
      ]
    }
  ],
}