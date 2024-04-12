import { withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'
import { Contents } from '../contents.ts'

const styles = () => ({
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
        justifyContent: 'center',
        padding: '30px',
        height: '100%',
    },
    header: {
        fontFamily: '"Amatic SC", sans-serif',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
        userSelect: 'none',
    },
    hero: {
        backgroundColor: '#e7a14d',
        height: '465px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '40px',
        flexDirection: 'column',
    },
    title: {
        fontSize: '2rem',
        fontFamily: '"Amatic SC", sans-serif',
    },
    group: {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'space-between',
        backgroundColor: '#6c4c3659',
        padding: '10px',
        height: '120px',
        marginBottom: '10px',
        borderRadius: '10px',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            transform: 'scale(1.03)',
            backgroundColor: '#3d224647',
        },
    },
    groupText: {
        width: 'calc(100% - 300px)',
        fontSize: '1.2rem',
    },
    link: {
        width: '1180px',
        height: '120px',
        position: 'absolute',
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
                            width="270px"
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
