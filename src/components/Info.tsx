import { Theme, withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'
import { Contents } from '../contents.ts'

const styles = (theme: Theme) => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1rem',
    },
    header: {
        fontFamily: '"Amatic SC", sans-serif',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        userSelect: 'none',
    },
    hero: {
        backgroundColor: '#204a4e',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: '400px',
    },
    info: {
        width: '100%',
        height: '100%',
        padding: theme.spacing(4),
    },
    title: {
        fontSize: '1.5rem',
        fontFamily: '"Amatic SC", sans-serif',
    },
    wiki: {
        marginTop: theme.spacing(2),
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
                        height="400px"
                    ></img>
                </div>
                <div className={classes.info}>
                    <div className={classes.title}>{Contents.info.title} </div>
                    <ul>
                        {Contents.info.principals.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                    {Contents.info.paragraphs.map((p) => (
                        <div key={p}>{p}</div>
                    ))}
                    <div className={classes.wiki}>{Contents.info.credit}</div>
                    <a
                        href={Contents.info.creditLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {Contents.info.creditLink}
                    </a>
                </div>
            </div>
        </div>
    )
})
