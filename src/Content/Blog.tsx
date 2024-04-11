import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';
import post1 from '../md/blog-post.1.md';
import post2 from '../md/blog-post.2.md';
import post3 from '../md/blog-post.3.md';

const styles = (theme: any) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarMain: {
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
    },
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing.unit * 4,
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing.unit * 6}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing.unit * 3,
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    markdown: {
        // padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        // padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing.unit * 3,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
         marginTop: theme.spacing.unit * 8,
        // padding: `${theme.spacing.unit * 6}px 0`,
    },
});

const sections = [
    'מאמרים',
    'פודקאסט',
    'הסכם לדוגמא',
    'ספקים',
];

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

const posts = [post1, post2, post3];

console.error(posts)

const archives = [
    'March 2020',
    'February 2020',
    'January 2020',
    'December 2019',
    'November 2019',
    'October 2019',
    'September 2019',
    'August 2019',
    'July 2019',
    'June 2019',
    'May 2019',
    'April 2019',
];

const social = ['GitHub', 'Twitter', 'Facebook'];

function Blog(props: any) {
    const { classes } = props;

    return (
        <React.Fragment >
            <CssBaseline />
            <div dir="rtl" className={classes.layout}>
                <Toolbar className={classes.toolbarMain}>
                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        מידעון הורות משותפת
                    </Typography>
                </Toolbar>
                <Toolbar  variant="dense" className={classes.toolbarSecondary}>
                    {sections.map(section => (
                        <Typography color="inherit" noWrap key={section}>
                            {section}
                        </Typography>
                    ))}
                </Toolbar>
                <main>
                    {/* Main featured post */}
                    <Paper className={classes.mainFeaturedPost}>
                        <Grid container>
                            <Grid item md={6}>
                                <div className={classes.mainFeaturedPostContent}>
                                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                        Title of a longer featured blog post
                                    </Typography>
                                    <Typography variant="h5" color="inherit" paragraph>
                                        Multiple lines of text that form the lede, informing new readers quickly and
                                        efficiently about what&apos;s most interesting in this post&apos;s contents…
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                    </Paper>
                    {/* End main featured post */}
                    {/* Sub featured posts */}
                    <Grid container spacing={10} className={classes.cardGrid}>
                        {featuredPosts.map(post => (
                            <Grid item key={post.title} xs={12} md={6}>
                                <Card className={classes.card}>
                                    <div className={classes.cardDetails}>
                                        <CardContent>
                                            <Typography component="h2" variant="h5">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="subtitle1" color="textSecondary">
                                                {post.date}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph>
                                                {post.description}
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary">
                                                Continue reading...
                                            </Typography>
                                        </CardContent>
                                    </div>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    {/* End sub featured posts */}
                    <Grid container spacing={10} className={classes.mainGrid}>
                        {/* Main content */}
                        <Grid item xs={12} md={8}>
                            <Typography variant="h6" gutterBottom>
                                From the Firehose
                            </Typography>
                            <Divider />
                            {posts.map(post => (
                                <Markdown className={classes.markdown} key={post.substring(0, 40)}>
                                    {post}
                                </Markdown>
                            ))}
                        </Grid>
                        {/* End main content */}
                        {/* Sidebar */}
                        <Grid item xs={12} md={4}>
                            <Paper elevation={0} className={classes.sidebarAboutBox}>
                                <Typography variant="h6" gutterBottom>
                                    About
                                </Typography>
                                <Typography>
                                    Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                                    amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                                </Typography>
                            </Paper>
                            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                Archives
                            </Typography>
                            {archives.map(archive => (
                                <Typography key={archive}>{archive}</Typography>
                            ))}
                            <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                                Social
                            </Typography>
                            {social.map(network => (
                                <Typography key={network}>{network}</Typography>
                            ))}
                        </Grid>
                        {/* End sidebar */}
                    </Grid>
                </main>
            </div>
            {/* Footer */}
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
                </Typography>
            </footer>
            {/* End footer */}
        </React.Fragment>
    );
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);