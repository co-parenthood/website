import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Theme, withStyles } from '@material-ui/core/styles'
import { YellowMain } from '../theme.ts'
import { Drawer, IconButton, Tooltip } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import { Menu } from './Menu.tsx'

const lgbtqCenterImageUrl =
    'https://lgbtqcenter.org.il/wp-content/uploads/2024/01/TLV_17933_pride-logo-color222.png'

const styles = (theme: Theme) => ({
    toolbarMain: {
        padding: `${theme.spacing(4)}px 0`,
        backgroundColor: YellowMain,
    },
    toolbarTitle: {
        flex: 1,
        fontWeight: 400,
    },
    logo: {
        position: 'absolute',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

export const Header = withStyles(styles)(({
    classes,
}: {
    classes: Classes
}) => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    return (
        <Toolbar className={classes.toolbarMain}>
            <img
                className={classes.logo}
                height={120}
                src={lgbtqCenterImageUrl}
                alt="logo"
            />
            <Typography
                component="h2"
                variant="h2"
                align="center"
                color="textPrimary"
                noWrap
                className={classes.toolbarTitle}
            >
                הורות משותפת
            </Typography>
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
                <Menu />
            </Drawer>
        </Toolbar>
    )
})
