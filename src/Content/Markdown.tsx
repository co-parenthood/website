import ReactMarkdown from 'markdown-to-jsx';
import {withStyles, Theme, WithStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ClassNamesArg, ClassNamesProps} from "@emotion/react";

const styles = (theme: Theme) => ({
    listItem: {
        marginTop: theme.spacing(1),
    },
});

const options = {
    overrides: {
        h1: {component: (props: any) => <Typography gutterBottom variant="h4" {...props} />},
        h2: {component: (props: any) => <Typography gutterBottom variant="h6" {...props} />},
        h3: {component: (props: any) => <Typography gutterBottom variant="subtitle1" {...props} />},
        h4: {component: (props: any) => <Typography gutterBottom variant="caption" paragraph {...props} />},
        p: {component: (props: any) => <Typography paragraph {...props} />},
        li: {
            component: withStyles(styles)(({classes, ...props}: WithStyles) => (
                <li className={classes.listItem}>
                    <Typography component="span" {...props} />
                </li>
            )),
        },
    },
};

export const Markdown = (props: { className: string, children: string }) => <ReactMarkdown className={props.className} options={options}>{props.children}</ReactMarkdown>;
