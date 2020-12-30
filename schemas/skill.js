export default {
    name: 'skill', //Computer name
    title: 'Languages & Skills', //Visible Title
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Language/Skill',
            type:  'string',
            description: 'Enter in the language or skill',
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
    ],
}
