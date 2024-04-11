import Typography from "@material-ui/core/Typography";
import {Theme, withStyles} from "@material-ui/core/styles";

const styles = (theme: Theme) => ({
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>


export const Footer = withStyles(styles)(({classes}: { classes: Classes }) =>
    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
            Footer
        </Typography>
        <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
        >
            Something here to give the footer a purpose!
        </Typography>
    </footer>)
