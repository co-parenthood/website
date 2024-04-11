import {Theme, withStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {Markdown} from "./Markdown.tsx";
import post1 from "../md/blog-post.1.md";
import post2 from "../md/blog-post.2.md";
import post3 from "../md/blog-post.3.md";

const styles = (theme: Theme) => ({
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
    },
    mainFeaturedPostContent: {
        padding: `${theme.spacing(6)}px`,
        [theme.breakpoints.up('md')]: {
            paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    markdown: {
        // padding: `${theme.spacing.unit * 3}px 0`,
    },
    sidebarAboutBox: {
        // padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
})
type Classes = Record<keyof ReturnType<typeof styles>, string>

const posts = [post1, post2, post3]

export const Main = withStyles(styles)(({classes}: ({ classes: Classes })) =>
    <main>
        <Paper className={classes.mainFeaturedPost}>
            <Grid container>
                <Grid item md={6}>
                    <div
                        className={classes.mainFeaturedPostContent}
                    >
                        <Typography
                            component="h1"
                            variant="h3"
                            color="inherit"
                            gutterBottom
                        >
                            Title of a longer featured blog post
                        </Typography>
                        <Typography
                            variant="h5"
                            color="inherit"
                            paragraph
                        >
                            Multiple lines of text that form the
                            lede, informing new readers quickly and
                            efficiently about what&apos;s most
                            interesting in this post&apos;s
                            contents…
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Paper>
        <Grid container spacing={10} className={classes.mainGrid}>
            <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                    From the Firehose
                </Typography>
                <Divider/>
                {posts.map((post) => (
                    <Markdown
                        className={classes.markdown}
                        key={post.substring(0, 40)}
                    >
                        {post}
                    </Markdown>
                ))}
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
                <Paper
                    elevation={0}
                    className={classes.sidebarAboutBox}
                >
                    <Typography variant="h6" gutterBottom>
                        About
                    </Typography>
                    <Typography>
                        Etiam porta sem malesuada magna mollis
                        euismod. Cras mattis consectetur purus sit
                        amet fermentum. Aenean lacinia bibendum
                        nulla sed consectetur.
                    </Typography>
                </Paper>
                <Typography
                    variant="h6"
                    gutterBottom
                    className={classes.sidebarSection}
                >
                    Archives
                </Typography>
            </Grid>
            {/* End sidebar */}
        </Grid>
    </main>
)
