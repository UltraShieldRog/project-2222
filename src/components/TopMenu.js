import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import Image from 'material-ui-image';

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
        <MenuItem>
          {/* <Image src='../img/logo' height="42" width="42" alt="logo" /> */}
          </MenuItem>
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
