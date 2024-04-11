import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Theme, withStyles } from '@material-ui/core/styles'

const styles = (theme: Theme) => ({
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Title = withStyles(styles)(({ classes }: { classes: Classes }) => (
    <Toolbar className={classes.toolbarMain}>
        <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
        >
            מידעון הורות משותפת
        </Typography>
    </Toolbar>
))
