export default [
    {
        name: 'Home',
        id: '0',
    },
    {
        name: 'Philosophy',
        id: '1',
        checked: true,
    },
    {
        name: 'Shop',
        id: '2',
        checked: true,
        open: true,
        children: [
            {
                name: 'Clothes',
                id: '3',
                checked: true,
                children: [
                    {
                        name: 'Socks',
                        id: '4',
                        checked: false,
                    },
                    {
                        name: 'Jeans',
                        id: '5',
                        checked: false,
                    },
                ],
            },
            {
                name: 'Food',
                id: '6',
                checked: true,
                children: [
                    {
                        name: 'Banana',
                        id: '7',
                        checked: false,
                    },
                    {
                        name: 'Potatoes',
                        id: '8',
                        checked: false,
                    },
                ],

            },
        ],
    },
    {
        name: 'Team',
        id: '9',
        checked: true,
        children: [
            {
                name: 'Management',
                id: '10',
                checked: true,
                children: [
                    {
                        name: 'Daredevil',
                        id: '11',
                        checked: false,
                    },
                    {
                        name: 'The Punisher',
                        id: '12',
                        checked: false,
                    },
                ],
            },
            {
                name: 'Workers',
                id: '13',
                checked: true,
                children: [
                    {
                        name: 'Superman',
                        id: '14',
                        checked: false,
                    },
                    {
                        name: 'Captain Universe',
                        id: '15',
                        checked: false,
                    },
                    {
                        name: 'Black widow',
                        id: '16',
                        checked: false,
                    },
                    {
                        name: 'Winnie Pooh',
                        id: '17',
                        checked: false,
                    },
                    {
                        name: 'Hulk',
                        id: '18',
                        checked: false,
                    },
                ],

            },
        ],
    },
];
