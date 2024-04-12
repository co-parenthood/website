import { Theme, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Contents } from '../contents.ts'
import {
    Black,
    LightBackground,
    YellowMain,
    YellowSecondary,
} from '../theme.ts'
import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { clsx } from 'clsx'

const ItemsMargin = '2rem'

const styles = (theme: Theme) => ({
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Black,
        height: '100%',
        width: '100%',
        padding: `0 ${theme.spacing(4)}px`,
    },
    item: {
        margin: `0 ${ItemsMargin}`,
        minWidth: '120px',
        flexGrow: 1,
        width: '100%',
        height: '100%',
        color: Black,
        textAlign: 'center',
        padding: theme.spacing(3),
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(1),
    },
    itemEven: {
        borderRadius: `0 0 1rem 1rem`,
        height: `calc(100% - ${ItemsMargin})`,
        backgroundColor: YellowMain,
        '&:hover': {
            backgroundColor: YellowSecondary,
        },
    },
    itemOdd: {
        borderRadius: `1rem 1rem 0 0`,
        marginTop: ItemsMargin,
        backgroundColor: LightBackground,
        '&:hover': {
            backgroundColor: YellowSecondary,
        },
    },
    itemImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Main = withStyles(styles)(({ classes }: { classes: Classes }) => {
    const navigate = useNavigate()
    const { main: items } = Contents

    const handleButtonClick = (pageClicked: string) => {
        ReactGA.event({
            category: 'User',
            action: pageClicked,
        })
    }

    const onNavigate = (route: string) => {
        handleButtonClick(route)
        navigate(route)
    }

    return (
        <div className={classes.main}>
            {items.map((item, index) => {
                const img = (
                    <img
                        className={classes.itemImage}
                        src={item.image}
                        alt={item.title}
                    />
                )
                return (
                    <div
                        key={item.route}
                        className={clsx(
                            classes.item,
                            index % 2 === 0 ? classes.itemEven : classes.itemOdd
                        )}
                        onClick={() => onNavigate(item.route)}
                    >
                        {index % 2 === 1 && img}
                        <Typography variant="h4" gutterBottom>
                            {item.title}
                        </Typography>
                        {index % 2 === 0 && img}
                    </div>
                )
            })}
        </div>
    )
})
