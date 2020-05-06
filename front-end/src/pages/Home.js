import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import BgUni from '../img/uni-background.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: { main: "#fff", contrastText: "#fff" },
    secondary: { main: "#fff", contrastText: "#fff" }
  }
});

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} style={{backgroundImage: `url(${BgUni})`, backgroundSize:"1000px", backgroundColor: "#fff", backgroundRepeat: "no-repeat", backgroundPosition: "center"}}>
        
        <ThemeProvider theme={theme}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="primary" gutterBottom>
              Serac
            </Typography>
            <Typography variant="h5" align="center" color="secondary" paragraph>
              Academic Study Platform
            </Typography>
          </Container>
        </ThemeProvider>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item key={1} xs={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require("../img/js-basic.jpg")}
                    title="JavaScript Basics"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      JavaScript Basics
                    </Typography>
                    <Typography>
                      JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link to="/dashboard-js-basics" style={{ color: 'inherit', textDecoration: 'none' }}>Explore</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={2} xs={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require("../img/js-adv.jpg")}
                    title="JavaScript Advanced"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      JavaScript Advanced
                    </Typography>
                    <Typography>
                      There are more advanced JavaScript skills you may want to explore. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link to="/dashboard-js-adv" style={{ color: 'inherit', textDecoration: 'none' }}>Explore</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={3} xs={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require("../img/spring-basic.png")}
                    title="Spring Basics"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Spring Basics
                    </Typography>
                    <Typography>
                      Backend with java is good. The Spring Framework is an application framework and inversion of control container for the Java platform. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link to="/dashboard-spring-basics" style={{ color: 'inherit', textDecoration: 'none' }}>Explore</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
              <Grid item key={4} xs={3}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={require("../img/spring-adv.jpeg")}
                    title="Spring Advanced"

                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Spring Advanced
                    </Typography>
                    <Typography>
                      Want to learn more about backend? Spring boot is a Java-based framework that makes back-end web development tasks easy for developers.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                    <Link to="/dashboard-spring-adv" style={{ color: 'inherit', textDecoration: 'none' }}>Explore</Link>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}