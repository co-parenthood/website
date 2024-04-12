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
            title: 'קהילות',
        },
    ],
    groups: [
        {
            title: 'הורות משותפת - חיפוש בן או בת זוג',
            description:
                'המקום להכיר בני או בנות זוג לצורך הבאת ילד לעולם בהורות משותפת',
            url: 'https://www.facebook.com/groups/323886141092537',
            image: '/group1.jpeg',
        },
        {
            title: 'הורות משותפת - מציאת שותפ/ה',
            description:
                'מטרת הקבוצה, לחבר ביניכם ולצור הורות משותפת, אך לא עוסקת בהיקף המשמורת או הסדרי השהייה ו/או בעניין הוצאות גידול הילד/ים',
            url: 'https://www.facebook.com/groups/982047565321582',
            image: '/group2.jpeg',
        },
        {
            title: 'הורות משותפת - כל מה שרצית לדעת',
            description: 'כאן זה המקום לשאול, להתעניין, לבדוק כל נושא משפטי',
            url: 'https://www.facebook.com/groups/2432256350346376',
            image: '/group3.jpeg',
        },
    ],
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
            name: 'דמי מזונות בסיסיים',
            link: '/contracts/contract1.pdf',
            preview: '/contract1.png',
        },
        {
            name: 'ללא ציון סך דמי המזונות',
            link: '/contracts/contract2.pdf',
            preview: '/contract2.png',
        },
        {
            name: 'סכום מזונות מוגדל',
            link: '/contracts/contract3.pdf',
            preview: '/contract3.png',
        },
    ],
    community: {
        mailto: 'test@email.com',
    },
}
