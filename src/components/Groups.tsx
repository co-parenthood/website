import { Theme, withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'
import { Contents } from '../contents.ts'
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
        justifyContent: 'center',
        padding: theme.spacing(1),
        height: '100%',
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
        backgroundColor: '#e7a14d',
        display: 'flex',
        justifyContent: 'space-around',
        padding: theme.spacing(2),
        flexDirection: 'column',
    },
    title: {
        fontSize: isMobile ? '1.5rem' : '2rem',
        fontFamily: '"Amatic SC", sans-serif',
        paddingBottom: theme.spacing(1),
    },
    group: {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: theme.spacing(2),
        cursor: 'pointer',
        justifyContent: 'space-between',
        backgroundColor: '#6c4c3659',
        padding: theme.spacing(2),
        margin: theme.spacing(1),
        height: 'fit-content',
        borderRadius: '1rem',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: '#3d224647',
        },
    },
    groupText: {
        width: '100%',
        fontSize: '1rem',
    },
    link: {
        width: '1180px',
        height: '120px',
        position: 'absolute',
    },
    image: {
        borderRadius: '1rem',
        objectFit: 'cover',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Groups = withStyles(styles)(({
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
            <div className={classes.header}>קהילות - קבוצות פייסבוק</div>
            <div className={classes.hero}>
                {Contents.groups.map((group, index) => {
                    const img = (
                        <img
                            src={group.image}
                            alt={group.title}
                            height={120}
                            className={classes.image}
                        />
                    )
                    return (
                        <div className={classes.group}>
                            <a
                                href={group.url}
                                className={classes.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            ></a>
                            {index % 2 === 0 && img}
                            <div className={classes.groupText}>
                                <div className={classes.title}>
                                    {group.title}
                                </div>
                                <div>{group.description}</div>
                            </div>
                            {index % 2 === 1 && img}
                        </div>
                    )
                })}
            </div>
        </div>
    )
})
