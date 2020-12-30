export default {
    name: 'socialmedia', //Computer name
    title: 'Social Media Links', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Platform',
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
            name: 'image',
            title: 'Logo',
            type:  'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'hoverimage',
            title: 'Hover Logo',
            type:  'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'link',
            title: 'Link',
            type:  'url',
        },
    ],
}
