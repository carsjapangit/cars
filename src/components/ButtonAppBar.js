import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from "@material-ui/icons/PersonOutline";

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="title" color="inherit" className={classes.flex}>
            SS CARS JAPAN
          </Typography>
          <IconButton  color="inherit" aria-label="Login">
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
