import { Theme, withStyles } from '@material-ui/core/styles'
import { clsx } from 'clsx'

const styles = (theme: Theme) => ({
    balloon: {
        position: 'fixed',
        bottom: theme.spacing(4),
        left: theme.spacing(4),
        backgroundColor: 'red',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Balloon = withStyles(styles)(
    ({ classes }: { classes: Classes }) => (
        <div className={clsx(classes.balloon, 'speech-bubble', 'round')}>
            מרגיש?
        </div>
    )
)
