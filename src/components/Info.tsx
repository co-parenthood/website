import { withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'

const styles = () => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1rem',
    },
    header: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        userSelect: 'none',
    },
    hero: {
        backgroundColor: '#204a4e',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '400px',
        height: '400px',
    },
    info: {
        width: 'calc(100% - 400px)',
        height: '400px',
        padding: '17px',
    },
    title: {
        fontSize: '1.5rem',
    },
    wiki: {
        marginTop: '20px',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Info = withStyles(styles)(({ classes }: { classes: Classes }) => {
    const { pathname } = useLocation()
    if (pathname.endsWith(JoinRoute)) {
        return
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.header}>מהי הורות משותפת</div>
            <div className={classes.hero}>
                <div className={classes.image}>
                    <img src="/parents.png" width="400px" height="400px"></img>
                </div>
                <div className={classes.info}>
                    <div className={classes.title}>
                        הורות משותפת (באנגלית: Shared Parenting) היא שם כולל
                        למודלים של הורות המהוות חלופה לנישואים ומבוססות על שלושה
                        עקרונות:
                    </div>
                    <ul>
                        <li>
                            זכותו של הילד לקשר משמעותי עם כל הוריו גם אם אינם
                            נשואים זה לזה.
                        </li>
                        <li>
                            נשיאה משותפת באחריות הורית וכלכלית לילד, בכך שכל
                            הוריו יגדלו אותו יחדיו, גם אם אינם רשומים כנשואים,
                            וגם אם אין ביניהם קשר רומנטי.
                        </li>
                        <li>זכותו של כל הורה בנפרד לקשר משמעותי עם הילד.</li>
                    </ul>
                    <div>
                        יישום נפוץ של מודל זה כולל נשים וגברים שהחליטו להביא יחד
                        לעולם ילד, או ילדים משותפים, מבלי לחיות בזוגיות או לקיים
                        משק בית משותף. ההורים יכולים להיות הטרוסקסואלים או
                        חד-מיניים, עם בני זוג או בלעדיהם. תהליך ההתעברות מתבצע
                        באמצעות הפריה מלאכותית בבית חולים, באופן עצמי, במרפאת
                        פוריות, או ביחסי מין.
                    </div>
                    <div>
                        לשם כך, לרוב יערכו ביניהם ההורים הסכם הורות משותפת קודם
                        לתהליך. ההסכם יכול להתקיים בין הורים
                        שיש ביניהם אמון ומערכת יחסים מינימלית לגידול משותף של
                        ילד, גם אם הם רשומים פורמלית כרווקים, או גרושים. ההסכם,
                        שנחתם לרוב טרום הולדת הילד, כולל הסדרה והתייחסות לתחומים
                        הקשורים להריון, טיפולי פוריות, חלוקת אחריות כלכלית,
                        חלוקת ימי טיפול בילד וסוגיות כמו חינוך, הסעות ועוד.
                    </div>
                    <div className={classes.wiki}>
                        מתוך ויקיפדיה (הזכויות שמורות)
                    </div>
                    <a href="https://he.wikipedia.org/wiki/%D7%94%D7%95%D7%A8%D7%95%D7%AA_%D7%9E%D7%A9%D7%95%D7%AA%D7%A4%D7%AA">
                        לעיון בערך המלא
                    </a>
                </div>
            </div>
        </div>
    )
})
