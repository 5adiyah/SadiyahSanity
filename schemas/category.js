export default {
    name: 'category', //Computer name
    title: 'Blog Categories', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'category',
            title: 'Category',
            type:  'string',
            description: 'Enter in the name of the category',
        },
        {
            name: 'slug',
            title: 'Slug',
            type:  'slug',
            options: {
                source: 'category',
                maxLength: 100,
            }
        },
    ]
}