import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = makeStyles(theme => ({
  
    popup: {
        position: "fixed",
        width: 100,
        height: "100%",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        backgroundColor: `rgba(0,0,0, 0.5)`,
      },
    popupInner: {
        position: "absolute",
        left: "25%",
        right: "25%",
        top: "25%",
        bottom: "25%",
        margin: "auto",
        borderRadius: "20px",
    },
}));

class Popup extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.popup}>
                <div className={classes.popupInner}>
                <h1>{this.props.text}</h1>
                <Button variant="contained" color="primary" onClick={this.props.closePopup}>OK</Button>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Popup);