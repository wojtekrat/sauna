export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'header',
            title: 'Header',
            type: 'string'
        },
        {
            name: 'text',
            title: 'Text',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image'
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string'
        },
        {
            name: 'hashtags',
            title: 'Hashtags',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'      
        },
    ]
}