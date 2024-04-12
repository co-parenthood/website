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
            image: 'community.png',
            title: 'קהילות',
        },
    ],
    groups: [
        {
            title: 'הורות משותפת - חיפוש בן או בת זוג',
            description:
                'המקום להכיר בני או בנות זוג לצורך הבאת ילד לעולם בהורות משותפת.',
            url: 'https://www.facebook.com/groups/323886141092537',
            image: '/group1.jpeg',
        },
        {
            title: 'הורות משותפת - מציאת שותפ/ה',
            description:
                'מטרת הקבוצה, לחבר ביניכם ולצור הורות משותפת, אך לא עוסקת בהיקף המשמורת או הסדרי השהייה ו/או בעניין הוצאות גידול הילד/ים.',
            url: 'https://www.facebook.com/groups/982047565321582',
            image: '/group2.jpeg',
        },
        {
            title: 'הורות משותפת - כל מה שרצית לדעת',
            description: 'כאן זה המקום לשאול, להתעניין, לבדוק כל נושא משפטי.',
            url: 'https://www.facebook.com/groups/2432256350346376',
            image: '/group3.jpeg',
        },
    ],
    info: {
        image: '/parents.png',
        title: 'הורות משותפת (באנגלית: Shared Parenting) היא שם כולל למודלים של הורות המהוות חלופה להורות מסורתית ומבוססות על שלושה עקרונות:',
        principals: [
            'זכותו של הילד לקשר משמעותי עם כל הוריו גם אם אינם בזוגיות.',
            'נשיאה משותפת באחריות הורית וכלכלית לילד, בכך שכל הוריו יגדלו אותו יחדיו, גם אם אינם בזוגיות, וגם אם אין ביניהם קשר רומנטי.',
            'זכותו של כל הורה בנפרד לקשר משמעותי עם הילד.',
        ],
        paragraphs: [
            'יישום נפוץ של מודל זה כולל נשים וגברים שהחליטו להביא יחד לעולם ילד, או ילדים משותפים, מבלי לחיות בזוגיות או לקיים משק בית משותף. ההורים יכולים להיות בעלי כל זהות משיכתית, בזוגיות או שלא. תהליך ההתעברות מתבצע באמצעות הפריה מלאכותית בבית חולים, באופן עצמי, במרפאת פוריות, או ביחסי מין.',
            'לשם כך, לרוב יערכו ביניהם ההורים הסכם הורות משותפת קודם לתהליך. ההסכם יכול להתקיים בין הורים שיש ביניהם אמון ומערכת יחסים מינימלית לגידול משותף של ילד, גם אם הם רשומים פורמלית כרווקים, או גרושים. ההסכם, שנחתם לרוב טרום הולדת הילד, כולל הסדרה והתייחסות לתחומים הקשורים להריון, טיפולי פוריות, חלוקת אחריות כלכלית, חלוקת ימי טיפול בילד וסוגיות כמו חינוך, הסעות ועוד.',
        ],
        credit: 'מתוך ויקיפדיה (הזכויות שמורות)',
        creditLinkTitle: 'לעיון בערך המלא',
        creditLink:
            'https://he.wikipedia.org/wiki/%D7%94%D7%95%D7%A8%D7%95%D7%AA_%D7%9E%D7%A9%D7%95%D7%AA%D7%A4%D7%AA',
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
            links: [
                {
                    url: '',
                    title: 'בקרוב',
                },
            ],
        },
        {
            title: 'מציאת פרטנרים להורות משותפת',
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
    join: {
        link: 'https://lgbtqcenter.org.il/%D7%A6%D7%A8%D7%95-%D7%A7%D7%A9%D7%A8',
    },
}
