export default {
    name: 'experience', //Computer name
    title: 'Job Experiences', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Company Name',
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
            name: 'role',
            title: 'Role/Position',
            type:  'string',
        },
        {
            name: 'date',
            title: 'Date',
            type:  'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'array',
            of: [{type: 'block'}],
        },
        {
            name: 'order',
            title: 'Order',
            type:  'number',
        },
    ],
}