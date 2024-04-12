import {
    ContractsRoute,
    GroupsRoute,
    InfoRoute,
    ProvidersRoute,
} from './routes.ts'

export const Contents = {
    main: [
        {
            route: InfoRoute,
            image: 'joint-parenting.png',
            title: 'מהי הורות משותפת',
        },
        {
            route: ContractsRoute,
            image: 'document.png',
            title: 'הסכם הורות משותפת לדוגמא',
        },
        {
            route: ProvidersRoute,
            image: 'services.png',
            title: 'נותני שירותים',
        },
        {
            route: GroupsRoute,
            image: 'comunity.png',
            title: 'קבוצות פייסבוק',
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
