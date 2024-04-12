import { Theme, withStyles } from '@material-ui/core/styles'
import {
    Black,
    LightBackground,
    YellowMain,
    YellowSecondary,
} from '../theme.ts'
import { clsx } from 'clsx'
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

// @ts-ignore
export const Join = withStyles(styles)(({ classes }: { classes: Classes }) => {
    return (
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
