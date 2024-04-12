import { Theme, withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { CommunityRoute } from '../routes.ts'
import { Contents } from '../contents.ts'
import { Black } from '../theme.ts'
import { Tooltip } from '@mui/material'

const styles = (theme: Theme) => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1rem',
    },
    content: {
        width: 'calc(100% - 220px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        padding: theme.spacing(4),
        height: '100%',
        gap: theme.spacing(4),
    },
    header: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        userSelect: 'none',
    },
    hero: {
        backgroundColor: '#dd92bb',
        height: '465px',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gap: '10px',
        padding: '10px',
    },
    title: {
        fontSize: '1.5rem',
    },
    infoItem: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fcf1f152',
        borderRadius: '10px',
    },
    img: {
        borderRadius: '18px',
        objectFit: 'cover',
    },
    categoryTitle: {
        width: '100%',
        fontSize: '1.5rem',
        color: '#a34545',
        fontWeight: '600',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Providers = withStyles(styles)(({
    classes,
}: {
    classes: Classes
}) => {
    const { pathname } = useLocation()
    if (pathname.endsWith(CommunityRoute)) {
        return
    }
    return (
        <div className={classes.mainContainer}>
            <div className={classes.header}>נותני שירותים</div>
            <div className={classes.hero}>
                {Contents.providers.map((provider) => (
                    <div key={provider.title} className={classes.infoItem}>
                        <img
                            src={provider.image}
                            alt={provider.title}
                            width={200}
                            height={200}
                            className={classes.img}
                        ></img>
                        <div className={classes.content}>
                            <div className={classes.categoryTitle}>
                                {provider.title}
                            </div>
                            <div className={classes.links}>
                                {provider.links.map((link) => (
                                    <div key={link.title}>
                                        <Tooltip title={link.url}>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{ color: Black }}
                                            >
                                                {link.title}
                                            </a>
                                        </Tooltip>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
})
