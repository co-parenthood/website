import { Theme, withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Contents } from '../contents.ts'
import { Black, LightBackground, YellowMain } from '../theme.ts'
import { useNavigate } from 'react-router-dom'
import ReactGA from 'react-ga4'
import { clsx } from 'clsx'
import { isMobile } from '../utils/mobile.ts'

const ItemsMargin = isMobile ? '1rem' : '2rem'

const styles = (theme: Theme) => ({
    main: {
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        fontFamily: '"Amatic SC", sans-serif',
        backgroundColor: Black,
        height: '100%',
        width: '100%',
        padding: isMobile
            ? `${theme.spacing(2)}px 0`
            : `0 ${theme.spacing(4)}px`,
        gap: ItemsMargin,
    },
    item: {
        minWidth: '120px',
        flexGrow: 1,
        width: '100%',
        height: '100%',
        color: Black,
        textAlign: 'center',
        padding: theme.spacing(isMobile ? 1 : 3),
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(isMobile ? 0 : 1),
        justifyContent: 'center',
    },
    itemEven: {
        borderRadius: isMobile ? `0 1rem 1rem 0` : `0 0 1rem 1rem`,
        marginRight: ItemsMargin,
        height: isMobile ? 200 : `calc(100% - ${ItemsMargin})`,
        backgroundColor: YellowMain,
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#ffec83',
        },
    },
    itemOdd: {
        borderRadius: isMobile ? `1rem 0 0 1rem` : `1rem 1rem 0 0`,
        marginTop: isMobile ? 'unset' : ItemsMargin,
        width: isMobile ? `calc(100% - ${ItemsMargin})` : '100%',
        height: isMobile ? 200 : `calc(100% - ${ItemsMargin})`,
        backgroundColor: LightBackground,
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        '&:hover': {
            backgroundColor: '#d2d5d8',
        },
    },
    itemImage: {
        width: '100%',
        height: isMobile ? 120 : '100%',
        objectFit: 'cover',
        borderRadius: `1rem`,
    },
    title: {
        fontFamily: '"Amatic SC", sans-serif',
        fontWeight: '700',
        margin: 0,
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
                        <Typography
                            variant="h4"
                            gutterBottom
                            className={classes.title}
                        >
                            {item.title}
                        </Typography>
                        {index % 2 === 0 && img}
                    </div>
                )
            })}
        </div>
    )
})
