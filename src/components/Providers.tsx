import { withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { CommunityRoute } from '../routes.ts'

const styles = () => ({
    mainContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        color: 'white',
        fontSize: '1rem'
    },
    content: {
        width: 'calc(100% - 220px)',
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
        height: '100%'

    },
    header: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
    },
    hero: {
        backgroundColor: '#178c98',
        height: '500px',
        display: 'grid',
        gridTemplateColumns: 'auto auto',
        gap: '10px',
        padding: '10px' 
    },
    title: {
        fontSize: '1.5rem'
    },
    infoItem:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#fcf1f152',
        borderRadius: '10px'
    },
    img: {
        borderRadius: '18px',
        objectFit: 'cover'
    },
    categoryTitle: {
        width: '350px',
        height: '20px',
        fontSize: '1rem'
    }
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
            <div className={classes.infoItem}>
                <img  src="/law.png" width='200px' height='200px' className={classes.img}></img>
                <div className={classes.content}>
                    <div className={classes.categoryTitle}>עורכי דין</div>
                </div>
            </div>
            <div className={classes.infoItem}>
            <img  src="/surogate.png" width='200px' height='200px' className={classes.img}></img>
                <div className={classes.content}>
                    <div className={classes.categoryTitle}>סוכנויות פונדקאות /תרומה</div>
                    <div></div>
                </div>
            </div>
            <div className={classes.infoItem}>
            <img  src="/partnership.png" width='200px' height='200px' className={classes.img}></img>
                <div className={classes.content}>
                    <div className={classes.categoryTitle}>חברות למציאת פרטנרים להורות משותפת</div>
                    <div></div>
                </div>
            </div>
            <div className={classes.infoItem}>
            <img  src="/mediation.png" width='200px' height='200px' className={classes.img}></img>
                <div className={classes.content}>
                    <div className={classes.categoryTitle}>גישור</div>
                    <div></div>
                </div>
            </div>
        </div>
       </div>
    )
})
