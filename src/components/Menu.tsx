import {  withStyles } from '@material-ui/core/styles'
import {Link} from 'react-router-dom';
const styles = () => ({
 main: {
    padding: '10px',
    backgroundColor: '#FFCC31',
    height: '100%',
    color: 'black'
 },
 list: {
    listStyle: 'none',
    textAlign: 'right',
    margin: '0px',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column'
 },
 item : {
    color: 'black',
    margin: '10px',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: '600'
 }
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Menu = withStyles(styles)(({ classes }: { classes: Classes }) => {
    
   return( 
        <div className={classes.main}>
            <div className={classes.list}>
      
                <Link to="/info" className={classes.item}>מהי הורות משותפת</Link>
                <Link to="/contracts" className={classes.item}>הסכם הורות משותפת לדוגמה</Link>
                <Link to="/groups" className={classes.item}>קבוצות פייסבוק</Link>
                <Link to="/providers" className={classes.item}>נותני שירותים</Link>
                <Link to="/community" className={classes.item}>אשמח ללוות תהליך</Link>
            </div>
        </div>
   )
   
}
)
