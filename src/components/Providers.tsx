import { Theme, withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'
import { Contents } from '../contents.ts'
import { Black } from '../theme.ts'
import { Tooltip } from '@mui/material'
import { isMobile } from '../utils/mobile.ts'

const styles = (theme: Theme) => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1rem',
    },
    content: {
        display: 'flex',
        padding: theme.spacing(1),
        flexDirection: 'column',
        justifyContent: 'start',
        height: '100%',
        color: 'black',
        gap: theme.spacing(4),
    },
    header: {
        fontFamily: '"Amatic SC", sans-serif',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: isMobile ? '1.5rem' : '2rem',
        userSelect: 'none',
        padding: theme.spacing(isMobile ? 1 : 2),
    },
    hero: {
        backgroundColor: '#dd92bb',
        height: 'fit-content',
        display: 'grid',
        gridTemplateColumns: isMobile ? 'auto' : 'auto auto',
        gap: theme.spacing(isMobile ? 1 : 2),
        padding: theme.spacing(2),
    },
    infoItem: {
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#fcf1f152',
        borderRadius: '1rem',
        padding: theme.spacing(1),
        gap: theme.spacing(2),
        alignItems: 'center',
    },
    img: {
        borderRadius: '1rem',
        objectFit: 'cover',
    },
    categoryTitle: {
        width: '100%',
        fontSize: '1.5rem',
        color: '#a34545',
        fontWeight: '700',
        fontFamily: '"Amatic SC", sans-serif',
        userSelect: 'none',
    },
    links: {
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Providers = withStyles(styles)(({
    classes,
}: {
    classes: Classes
}) => {
    const { pathname } = useLocation()
    if (pathname.endsWith(JoinRoute)) {
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
                            height={isMobile ? 120 : 200}
                            width={isMobile ? 120 : 200}
                            className={classes.img}
                        ></img>
                        <div className={classes.content}>
                            <div className={classes.categoryTitle}>
                                {provider.title}
                            </div>
                            <div className={classes.links}>
                                {provider.links.map((link) => (
                                    <div key={link.title}>
                                        {link.url ? (
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
                                        ) : (
                                            link.title
                                        )}
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
