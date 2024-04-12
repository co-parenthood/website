import { Theme, withStyles } from '@material-ui/core/styles'
import {
    Black,
    LightBackground,
    YellowMain,
    YellowSecondary,
} from '../theme.ts'
import { clsx } from 'clsx'
import Typography from '@material-ui/core/Typography'
import { Box } from '@mui/material'
import { useState } from 'react'
import { Contents } from '../contents.ts'

type Message = {
    name: string | undefined
    phone: string | undefined
    email: string | undefined
    subject: string
    message: string
}

const styles = (theme: Theme) => ({
    main: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
        height: 'fit-content',
        width: 'fit-content',
        maxWidth: 'unset',
        backgroundColor: YellowMain,
    },
    container: {
        padding: `${theme.spacing(2)}px 0`,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
        textAlign: 'start',
        padding: `${theme.spacing(1)}px 0`,
    },
    label: {
        width: 140,
    },
    input: {
        width: 240,
        backgroundColor: LightBackground,
        borderRadius: '4px',
        padding: theme.spacing(1),
        border: `1px solid ${Black}`,
        color: Black,
        fontSize: '1.2rem',
        textAlign: 'start',
    },
    textarea: {},
    button: {
        backgroundColor: LightBackground,
        borderRadius: '8px',
        padding: `${theme.spacing(1)}px ${theme.spacing(6)}px`,
        border: `1px solid ${Black}`,
        color: Black,
        fontSize: '1.2rem',
        textAlign: 'center',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: YellowSecondary,
        },
    },
    mainContainer: {
        fontFamily: '"Amatic SC", sans-serif',
        fontWeight: '700',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebeef1',
    },
    note: {
        backgroundImage: `url(${'/legal-pad.png'})`,
        width: '500px',
        height: '500px',
        boxShadow: '-0.5em 0 .4em grey',
        marginTop: '30px',
        rotate: '-4deg',
        fontSize: '2.9rem',
        padding: '82px 42px 0',
    },
    link: {
        color: 'blue',
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

const InputItem = ({
    title,
    classes,
    xl,
    value,
    setValue,
}: {
    value: string | undefined
    setValue: (value: string) => void
    title: string
    classes: Classes
    xl?: boolean
}) => (
    <div className={classes.row}>
        <div className={classes.label}>{title}</div>
        {xl ? (
            <textarea
                className={clsx(classes.input, classes.textarea)}
                rows={6}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        ) : (
            <input
                className={classes.input}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        )}
    </div>
)

// @ts-ignore
export const Join = withStyles(styles)(({ classes }: { classes: Classes }) => {
    const [state, setState] = useState<Message>({
        email: undefined,
        name: undefined,
        phone: undefined,
        subject: 'ליווי בהורות משותפת',
        message: '',
    })
    return (
        // <div className={clsx(classes.main, 'speech-bubble', 'round')}>
        //     <Typography
        //         component="h2"
        //         variant="h3"
        //         align="right"
        //         color="textPrimary"
        //         noWrap
        //     >
        //         ליווי בתהליך
        //     </Typography>
        //     <Box className={classes.container}>
        //         <div className={classes.row} style={{ gap: '2rem' }}>
        //             <div>
        //                 <InputItem
        //                     classes={classes}
        //                     title="שם:"
        //                     value={state.name}
        //                     setValue={(name) =>
        //                         setState((s) => ({ ...s, name }))
        //                     }
        //                 />
        //                 <InputItem
        //                     classes={classes}
        //                     title="סלולרי:"
        //                     value={state.phone}
        //                     setValue={(phone) =>
        //                         setState((s) => ({ ...s, phone }))
        //                     }
        //                 />
        //                 <InputItem
        //                     classes={classes}
        //                     title="דוא״ל:"
        //                     value={state.email}
        //                     setValue={(email) =>
        //                         setState((s) => ({ ...s, email }))
        //                     }
        //                 />
        //             </div>
        //             <div>
        //                 <InputItem
        //                     classes={classes}
        //                     title="נושא ההודעה:"
        //                     value={state.subject}
        //                     setValue={(subject) =>
        //                         setState((s) => ({ ...s, subject }))
        //                     }
        //                 />
        //                 <InputItem
        //                     classes={classes}
        //                     title="הודעה:"
        //                     xl
        //                     value={state.message}
        //                     setValue={(message) =>
        //                         setState((s) => ({ ...s, message }))
        //                     }
        //                 />
        //                 <div
        //                     className={classes.row}
        //                     style={{ justifyContent: 'end' }}
        //                 >
        //                     <button
        //                         className={classes.button}
        //                         onClick={() => alert(JSON.stringify(state))}
        //                     >
        //                         שליחה
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </Box>
        // </div>
        <div className={classes.mainContainer}>
            <div className={classes.note}>
                <div>לליווי או ללוות תהליך</div>
                <div>צרו קשר 🌈</div>
                <a
                    style={{ color: 'blue' }}
                    href={Contents.join.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
               המרכז הגאה
                </a>
            </div>
        </div>
    )
})
