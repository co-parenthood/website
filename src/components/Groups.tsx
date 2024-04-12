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
        backgroundColor: '#e7a14d',
        height: '465px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '40px',
        flexDirection: 'column'
     
    },
    title: {
        fontSize: '2rem'
    },
    group: {
        display: 'flex',
        cursor: 'pointer',
        justifyContent: 'space-between',
        backgroundColor: '#e4cce459',
        padding: '10px',
        height:'120px',
        marginBottom: '10px',
        borderRadius: '10px',
        transition: 'transform 0.2s ease, background-color 0.2s ease', 
        '&:hover': { 
            transform: 'scale(1.03)', 
            backgroundColor: '#3d224647' 
        }
        
    },
    groupText: {
        width: 'calc(100% - 300px)',
        fontSize: '1.2rem'
    },
    link : {
        width:'1180px',
        height:'120px',
        position: 'absolute'
    }

  

    
    
  
  
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Groups = withStyles(styles)(({
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
        <div className={classes.header}>קהילות - קבוצות פייסבוק</div>
        <div className={classes.hero}>
            <div className={classes.group}>
                <a href="https://www.facebook.com/groups/323886141092537" className={classes.link}></a>
                <img src="/group1.jpeg" width='270px' height='100px'></img>
                <div className={classes.groupText}>
                    <div className={classes.title}>הורות משותפת - חיפוש בן או בת זוג</div>
                    <div>המקום להכיר בני או בנות זוג לצורך הבאת ילד לעולם בהורות משותפת.</div>
                </div>
            </div>
            <div className={classes.group}>
                <a href="https://www.facebook.com/groups/982047565321582" className={classes.link}></a>
                <div className={classes.groupText}>
                    <div className={classes.title}>הורות משותפת - מציאת שותפ/ה</div>
                    <div>מטרת הקבוצה, לחבר ביניכם ולצור הורות משותפת, אך לא עוסקת בהיקף המשמורת או הסדרי השהייה ו/או בעניין הוצאות גידול הילד/ים.</div>
                </div>
                <img src="/group2.jpeg" width='270px' height='100px'></img>
            </div>
            <div className={classes.group}>
                <a href="https://www.facebook.com/groups/2432256350346376/" className={classes.link}></a>
                <img src="/group3.jpeg" width='270px' height='100px'></img>
                <div className={classes.groupText}>
                    <div className={classes.title}>הורות משותפת - כל מה שרצית לדעת</div>
                    <div>כאן זה המקום לשאול, להתעניין, לבדוק כל נושא משפטי.</div>
                </div>
            </div>
          
        </div>
       </div>
    )
})
