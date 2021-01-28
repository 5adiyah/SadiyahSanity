export default {
    name: 'intro', //Computer name
    title: 'Intro Component', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Page Name',
            type:  'string',
        },
        {
            name: 'pagetitle',
            title: 'Page Title',
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
            type: 'text',
        }
    ]
}