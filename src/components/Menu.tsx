import { Theme, withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import { YellowMain, YellowSecondary } from '../theme.ts'
import { Contents } from '../contents.ts'

const styles = (theme: Theme) => ({
    main: {
        fontFamily: '"Amatic SC", sans-serif',
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
export const Menu = withStyles(styles)(
    ({ classes, close }: { classes: Classes; close: () => void }) => (
        <div className={classes.main}>
            <div className={classes.list}>
                <Link to="/" className={classes.item} onClick={() => close()}>
                    בית
                </Link>
                {Contents.main.map((item) => (
                    <Link
                        key={item.title}
                        to={item.route}
                        className={classes.item}
                        onClick={() => close()}
                    >
                        {item.title}
                    </Link>
                ))}
                <Link
                    to="/join"
                    className={classes.item}
                    onClick={() => close()}
                >
                    ליווי בתהליך
                </Link>
            </div>
        </div>
    )
)
