import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Face';
import { MenuItem } from '@material-ui/core';
import { Switch, Route, Redirect, Link, BrowserRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

// const drawerWidth = 240;

const styles = makeStyles(theme => ({
  // appBar: {
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   marginRight: drawerWidth,
  // },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

class TopMenu extends React.Component{
  render(){
    const { classes } = this.props;
    return (
      <AppBar position='fixed' className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <MenuItem>
            <Link to="/home">
              <Typography variant='h6' className={classes.title}>
                Home
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">
              <Typography variant='h6' className={classes.title}>
                About us
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/faq">
              <Typography variant='h6' className={classes.title}>
                FAQs
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Typography variant='h6' className={classes.title}>
              Messages
            </Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopMenu);
