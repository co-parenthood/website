import { Theme, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Footer } from './Footer.tsx'
import { Title } from './Title.tsx'
import { Main } from './Main.tsx'

const styles = (theme: Theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(1100 + theme.spacing(6))]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },

    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

const sections = ['מאמרים', 'פודקאסט', 'הסכם לדוגמא', 'ספקים']

export const Blog = withStyles(styles)(({ classes }: { classes: Classes }) => {
    return (
        <>
            <CssBaseline />
            <div className={classes.layout}>
                <Title />
                <Toolbar variant="dense" className={classes.toolbarSecondary}>
                    {sections.map((section) => (
                        <Typography color="inherit" noWrap key={section}>
                            {section}
                        </Typography>
                    ))}
                </Toolbar>
                <Main />
            </div>
            <Footer />
        </>
    )
})
