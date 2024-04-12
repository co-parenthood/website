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
            title: 'ייעוץ משפטי',
            image: '/law.png',
            links: [
                {
                    url: 'https://www.lgbt.org.il/legal',
                    title: 'האגודה למען הלהט״ב',
                },
            ],
        },
        {
            title: 'גישור',
            image: '/mediation.png',
            links: [
                {
                    url: 'https://lp.newfamily.org.il',
                    title: 'משפחה חדשה',
                },
            ],
        },
        {
            title: 'סוכניות פונדקאות',
            image: '/surrogate.png',
            links: [],
        },
        {
            title: '                            חברות למציאת פרטנרים להורות משותפת',
            image: '/partnership.png',
            links: [
                {
                    url: 'https://www.oro-il.co.il',
                    title: 'ORO',
                },
                {
                    url: 'https://www.hachasida.com',
                    title: 'החסידה',
                },
                {
                    url: 'https://babyli.co.il',
                    title: 'BABY LI',
                },
            ],
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
