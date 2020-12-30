export default {
    name: 'intro', //Computer name
    title: 'Intro Component', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Title',
            type:  'string',
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
            name: 'content',
            title: 'Body',
            type: 'array',
            of: [{type: 'block'}],
        }
    ]
}