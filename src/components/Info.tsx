import { Theme, withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'
import { Contents } from '../contents.ts'
import { isMobile } from '../utils/mobile.ts'

const styles = (theme: Theme) => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1rem',
    },
    header: {
        padding: `${theme.spacing(isMobile ? 1 : 2)}px 0`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: isMobile ? '1.5rem' : '2rem',
        userSelect: 'none',
    },
    hero: {
        backgroundColor: '#204a4e',
        height: 'fit-content',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {},
    info: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(isMobile ? 1 : 4),
    },
    paragraph: {
        marginTop: theme.spacing(1),
    },
    title: {
        fontSize: isMobile ? '1.2rem' : '1.5rem',
    },
    wiki: {
        marginTop: theme.spacing(isMobile ? 1 : 2),
        fontSize: '0.8rem',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
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
                    <img
                        alt="info"
                        src={Contents.info.image}
                        height={isMobile ? 200 : 400}
                    />
                </div>
                <div className={classes.info}>
                    <div className={classes.title}>{Contents.info.title} </div>
                    <ul>
                        {Contents.info.principals.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                    {Contents.info.paragraphs.map((p) => (
                        <div key={p} className={classes.paragraph}>
                            {p}
                        </div>
                    ))}
                    <div className={classes.wiki}>
                        <a
                            href={Contents.info.creditLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Contents.info.credit}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
})
