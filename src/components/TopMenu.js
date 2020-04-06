import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
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
          <img src={require("../img/logo.png")} height="40px" width="40px" alt="logo"/>
          <MenuItem>
            <Link to="/home" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                Home
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/forum" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                Forum
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/academic-honesty" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                Academic Honesty
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                About us
              </Typography>
            </Link>
          </MenuItem>
          <MenuItem>
            <Link to="/faq" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Typography variant='h6' className={classes.title}>
                FAQs
              </Typography>
            </Link>
          </MenuItem>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(TopMenu);
