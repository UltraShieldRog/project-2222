import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  mainContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(12, 0, 6),
  },
  mainButtons: {
    marginTop: theme.spacing(10),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div>
        <div className={classes.mainContent}>
            <Container maxWidth="sm">
                <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
                    404
                </Typography>
                <Typography variant="h5" align="center" color="secondary" paragraph>
                Our apologies.
                We're unable to find the
                page you're looking for.
                </Typography>
            <div className={classes.mainButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button variant="contained" color="primary">
                    Go back HOME
                  </Button>
                </Link>
                </Grid>
                <Grid item>
                <Link to="/faq" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <Button variant="outlined" color="primary">
                    See FAQs
                  </Button>
                </Link>
                </Grid>
              </Grid>
            </div>
            </Container>
        </div>
    </div>
  );
}