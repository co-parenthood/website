import Typography from '@material-ui/core/Typography'
import { Theme, withStyles } from '@material-ui/core/styles'

const lgbtqCenterImageUrl =
    'https://lgbtqcenter.org.il/wp-content/uploads/2024/01/TLV_17933_pride-logo-color222.png'

const styles = (theme: Theme) => ({
    footer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Footer = withStyles(styles)(
    ({ classes }: { classes: Classes }) => (
        <footer className={classes.footer}>
            <div>
                <img height={80} src={lgbtqCenterImageUrl} alt="logo" />
            </div>
            <Typography
                variant="subtitle2"
                align="center"
                color="textSecondary"
                component="p"
            >
                כל הזכויות שמורות לעיריית תל-אביב-יפו (C) |{' '}
                {new Date().getFullYear()}
            </Typography>
        </footer>
    )
)
