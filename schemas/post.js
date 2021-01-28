export default {
    name: 'post', //Computer name
    title: 'Blog Post', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type:  'string',
            description: 'Title of the post',
        },
        {
            name: 'slug',
            title: 'Slug',
            type:  'slug',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'category',
            title: 'Post Category',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'category' }] }]
        },
        {
            name: 'date',
            title: 'Publish Date',
            type:  'date',
        },
        {
            name: 'hero',
            title: 'Cover Image',
            type:  'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'teaser',
            title: 'Post Teaser',
            type:  'text',
        },
        {
            name: 'content',
            title: 'Body',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H1', value: 'h1' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'H5', value: 'h5' },
                        {title: 'Quote', value: 'blockquote'},
                    ]
                },
                // Marks let you mark up inline text in the block editor.
            ]
        }
    ]
}