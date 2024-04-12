import { Theme, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { YellowMain, YellowSecondary } from '../theme.ts'
import { Contents } from '../contents.ts'

const styles = (theme: Theme) => ({
    main: {
        backgroundColor: YellowMain,
        height: '100%',
        color: 'black',
        padding: theme.spacing(2),
    },
    list: {
        listStyle: 'none',
        textAlign: 'right',
        margin: '0px',
        padding: '0px',
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        color: 'black',
        textDecoration: 'none',
        borderRadius: '4px',
        fontSize: '1.5rem',
        fontWeight: '600',
        padding: '15px',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: YellowSecondary,
        },
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Menu = withStyles(styles)(({ classes }: { classes: Classes }) => {
    return (
        <div className={classes.main}>
            <div className={classes.list}>
                <Link to="/" className={classes.item}>
                    בית
                </Link>
                {Contents.main.map((item) => (
                    <Link
                        key={item.title}
                        to={item.route}
                        className={classes.item}
                    >
                        {item.title}
                    </Link>
                ))}
                <Link to="/community" className={classes.item}>
                    ליווי בתהליך
                </Link>
            </div>
        </div>
    )
})
