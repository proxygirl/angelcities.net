import image from "./image"

export default {
    name: 'blocks',
    title: 'Blocks',
    type: 'array',
    of: [
      {
        title: "Block",
        name: "blockObject",
        type: "object",
        fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },            
            {
                title: "Content",
                name: "content",
                type: "array",
                of: [{ type: "block" }, image],
            },
        ],
    }
    ]
}




