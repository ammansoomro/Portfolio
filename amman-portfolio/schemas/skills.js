export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'bgColor',
            title: 'BgColor',
            type: 'string',
            options: {
                list: [
                    { title: 'Light Gray', value: '#EDF2F7' },
                    // Add more color options if needed
                ],
            },
            initialValue: '#EDF2F7' // Set the initial/default value to #EDF2F7
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}