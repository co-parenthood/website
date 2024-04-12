import { Theme, withStyles } from '@material-ui/core/styles'
import { useLocation } from 'react-router-dom'
import { JoinRoute } from '../routes.ts'
import { Contents } from '../contents.ts'
import { isMobile } from '../utils/mobile.ts'
import { Tooltip } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

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
        height: '100%',
    },
    header: {
        display: 'flex',
        padding: theme.spacing(isMobile ? 1 : 2),
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: isMobile ? '1.5rem' : '2rem',
    },
    hero: {
        backgroundColor: '#178c98',
        padding: `${theme.spacing(isMobile ? 1 : 4)}px ${theme.spacing(isMobile ? 1 : 2)}px`,
        width: '100%',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    title: {
        fontSize: '1.5rem',
    },
    contract: {
        margin: theme.spacing(2),
        cursor: 'pointer',
        borderRadius: '1rem',
        width: 'fit-content',
        backgroundColor: '#ebebeb3b',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '&:hover': {
            transform: 'scale(1.05)',
            backgroundColor: '#62eadb80',
        },
    },
    contractImg: {
        borderRadius: '1rem',
    },
    description: {
        margin: theme.spacing(1),
        width: '100%',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: '1rem',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem',
    },
    downloadable: {
        width: '300px',
        height: '420px',
        position: 'absolute',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

// @ts-ignore
export const Contracts = withStyles(styles)(({
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
            <div className={classes.header}>הסכם הורות משותפת לדוגמה</div>
            <div className={classes.hero}>
                {Contents.contracts.map((contract) => (
                    <Tooltip title="להורדה">
                        <div className={classes.contract}>
                            <a
                                href={contract.link}
                                className={classes.downloadable}
                                target="_blank"
                                rel="noopener noreferrer"
                            />
                            <img
                                src={contract.preview}
                                alt={contract.name}
                                width="270px"
                                className={classes.contractImg}
                            />
                            <div className={classes.description}>
                                {contract.name}{' '}
                                <DownloadIcon fontSize="small" />
                            </div>
                        </div>
                    </Tooltip>
                ))}
            </div>
        </div>
    )
})
