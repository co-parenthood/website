import {
    ContractsRoute,
    GroupsRoute,
    InfoRoute,
    ProvidersRoute,
} from './routes.ts'

export const Contents = {
    main: [
        {
            route: GroupsRoute,
            image: 'https://i.imgur.com/Lrsmu19.png',
            title: 'קבוצות פייסבוק',
        },
        {
            route: ProvidersRoute,
            image: 'https://i.imgur.com/Lrsmu19.png',
            title: 'נותני שירותים',
        },
        {
            route: ContractsRoute,
            image: 'https://i.imgur.com/Lrsmu19.png',
            title: 'הסכם הורות משותפת לדוגמא',
        },
        {
            route: InfoRoute,
            image: 'https://i.imgur.com/Lrsmu19.png',
            title: 'מהי הורות משותפת?',
        },
    ],
    groups: ['https://i.imgur.com/Lrsmu19.png'],
    info: {
        text: '',
        image: 'https://i.imgur.com/Lrsmu19.png',
    },
    providers: [
        {
            name: 'עורך דין',
            image: 'https://i.imgur.com/Lrsmu19.png',
        },
    ],
    contracts: [
        {
            name: 'הסכם',
            link: 'https://i.imgur.com/Lrsmu19.png',
        },
    ],
    community: {
        mailto: 'test@email.com',
    },
}
