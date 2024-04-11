import { Theme, withStyles } from '@material-ui/core/styles'
import { clsx } from 'clsx'
import { YellowMain } from '../theme.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { CommunityRoute } from '../routes.ts'

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

export const Balloon = withStyles(styles)(({
    classes,
}: {
    classes: Classes
}) => {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    if (pathname.endsWith(CommunityRoute)) {
        return
    }
    return (
        <div
            className={clsx(classes.balloon, 'speech-bubble', 'round')}
            onClick={() => navigate(CommunityRoute)}
        >
            <div>אשמח ללוות בתהליך</div>
            <div>אשמח לליווי בתהליך</div>
        </div>
    )
})