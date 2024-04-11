import ReactMarkdown from 'markdown-to-jsx';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = (theme: any) => ({
    listItem: {
        marginTop: theme.spacing.unit,
    },
});

const options = {
    overrides: {
        h1: { component: (props: any) => <Typography gutterBottom variant="h4" {...props} /> },
        h2: { component: (props: any) => <Typography gutterBottom variant="h6" {...props} /> },
        h3: { component: (props: any) => <Typography gutterBottom variant="subtitle1" {...props} /> },
        h4: { component: (props: any) => <Typography gutterBottom variant="caption" paragraph {...props} /> },
        p: { component: (props: any) => <Typography paragraph {...props} /> },
        li: {
            component: withStyles(styles)(({ classes, ...props }: any) => (
                <li className={classes.listItem}>
                    <Typography component="span" {...props} />
                </li>
            )),
        },
    },
};

function Markdown(props: any) {
    return <ReactMarkdown options={options} {...props} />;
}

export default Markdown;