import { Theme, withStyles } from '@material-ui/core/styles'
import { clsx } from 'clsx'
import { YellowMain } from '../theme.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'

const styles = (theme: Theme) => ({
    balloon: {
        position: 'fixed',
        bottom: theme.spacing(4),
        left: theme.spacing(2),
        backgroundColor: YellowMain,
        cursor: 'pointer',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Balloon = withStyles(styles)(({
    classes,
}: {
    classes: Classes
}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    if (pathname.endsWith(JoinRoute)) {
        return
    }
    return (
        <div
            className={clsx(classes.balloon, 'speech-bubble', 'round')}
            onClick={() => navigate(JoinRoute)}
        >
            <div>אשמח ללוות/ ליווי בתהליך</div>
        </div>
    )
})
