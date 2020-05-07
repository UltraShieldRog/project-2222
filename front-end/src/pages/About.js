import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from 'react-avatar';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6),
  },
  cardGrid: {
    padding: theme.spacing(10, 0),
    margin: "0 auto",
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
    margin: "0 auto",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.mainContent}>
            <Container maxWidth="sm">
            <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                Contributors
            </Typography>
            </Container>
        </div>
        <div>
            <Container className={classes.cardGrid} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Avatar name="Roger Hong" size="150" textSizeRatio={1.75}/>
                            <Typography gutterBottom variant="h5" component="h2" align="center" >
                                Roger Hong
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Avatar name="Charles Sui" size="150" textSizeRatio={1.75}/>
                            <Typography gutterBottom variant="h5" component="h2" align="center" >
                                Charles Sui
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContent}>
                            <Avatar name="Eric Zhang" size="150" textSizeRatio={1.75}/>
                            <Typography gutterBottom variant="h5" component="h2" align="center">
                                Eric Zhang
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                            <Avatar name="Naixin Li" size="150" textSizeRatio={1.75}/>
                            <Typography gutterBottom variant="h5" component="h2" align="center" >
                                Naixin Li
                            </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    </div>
  );
}