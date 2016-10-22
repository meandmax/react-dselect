export default [
    {
        name: 'Home'
    },
    {
        name: 'Philosophy'
    },
    {
        name: 'Shop',
        children: [
            {
                name: 'Clothes',
                children: [
                    {
                        name: 'Socks'
                    },
                    {
                        name: 'Jeans'
                    },
                ],
            },
            {
                name: 'Food',
                children: [
                    {
                        name: 'Banana'
                    },
                    {
                        name: 'Potatoes'
                    },
                ],

            },
        ],
    },
    {
        name: 'Team',
        children: [
            {
                name: 'Management',
                children: [
                    {
                        name: 'Daredevil'
                    },
                    {
                        name: 'The Punisher'
                    },
                ],
            },
            {
                name: 'Workers',
                children: [
                    {
                        name: 'Superman'
                    },
                    {
                        name: 'Captain Universe'
                    },
                    {
                        name: 'Black widow'
                    },
                    {
                        name: 'Winnie Pooh'
                    },
                    {
                        name: 'Hulk'
                    },
                ],
            },
        ],
    },
];
