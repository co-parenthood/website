import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Theme, withStyles } from '@material-ui/core/styles'
import { YellowMain } from '../theme.ts'
import { Drawer, IconButton, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Menu } from './Menu.tsx'
import { useNavigate } from 'react-router-dom'

const lgbtqCenterImageUrl =
    'cop-logo.png'

const styles = (theme: Theme) => ({
    toolbarMain: {
        padding: `${theme.spacing(4)}px 0`,
        backgroundColor: YellowMain,
    },
    titleContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 700,
        cursor: 'pointer',
        userSelect: 'none',
        fontFamily: '"Amatic SC", sans-serif',
        width: 'fit-content',
    },
    logo: {
        position: 'absolute',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Header = withStyles(styles)(({
    classes,
}: {
    classes: Classes
}) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <Toolbar className={classes.toolbarMain}>
            <img
                style={{ 'marginRight': '20px' }}
                className={classes.logo}
                height={100}
                src={lgbtqCenterImageUrl}
                alt="logo"
            />
            <div className={classes.titleContainer}>
                <Typography
                    className={classes.title}
                    component="h2"
                    variant="h2"
                    align="center"
                    color="textPrimary"
                    noWrap
                    onClick={() => navigate('/')}
                >
                     הפורטל להורות משותפת
                </Typography>
            </div>
            <IconButton
                color="inherit"
                onClick={() => setMenuOpen(true)}
                sx={{ ml: 2, position: 'absolute', left: 0 }}
            >
                <Tooltip title="תפריט">
                    <MenuIcon fontSize="large" />
                </Tooltip>
            </IconButton>
            <Drawer
                anchor="left"
                variant="temporary"
                open={menuOpen}
                onClose={() => setMenuOpen(false)}
            >
                <Menu close={() => setMenuOpen(false)} />
            </Drawer>
        </Toolbar>
    )
})
