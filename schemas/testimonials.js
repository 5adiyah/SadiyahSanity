export default {
    name: 'testimonials', //Computer name
    title: 'Testimonials', //Visible Title
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
            name: 'role',
            title: 'Role & Company',
            type:  'string',
        },
        {
            name: 'image',
            title: 'Profile Picture',
            type:  'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'content',
            title: 'Testimonial Quote',
            type: 'array',
            of: [{type: 'block'}],
        },
        {
            name: 'bgcolor',
            title: 'Background Color',
            type: 'string',
            options: {
                list: [
                    {title: 'Light', value: 'lightbg'},
                    {title: 'Dark', value: 'darkbg'}
                ],
            }
        },
    ]
}