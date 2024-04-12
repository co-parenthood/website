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
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
    },
    hero: {
        backgroundColor: '#178c98',
        height: '465px',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '40px',
    },
    title: {
        fontSize: '1.5rem',
    },
    contract: {
        cursor: 'pointer',
        borderRadius: '10px',
        width: '300px',
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
        borderRadius: '10px',
    },
    descript: {
        marginTop: '10px',
        width: '250px',
        textAlign: 'center',
        fontWeight: '600',
        fontSize: '1.5rem',
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
                        <div className={classes.descript}>{contract.name}</div>
                    </div>
                ))}
            </div>
        </div>
    )
})
