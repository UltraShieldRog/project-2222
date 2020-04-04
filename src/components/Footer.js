import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 10,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Serac
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer() {
  const classes = useStyles();
  return (
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Serac
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Can't go outside due to the pandemic? Stay at home and learn from us!
        </Typography>
        <Copyright />
      </footer>
  );
}

export default Footer;
