import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import './Header.styles.scss';
import SimpleMenu from '../SimpleMenu/SimpleMenu.Component';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: '#4EBFE2' }} position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton, "ourMenuButton"} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className="logo-link" color="white" to='/'>POPTROPICA</Link>
          </Typography>
          <Link className="link" color="inherit" to='/about'>ABOUT</Link>
          <Link className="link" color="inherit" to='/contact'>CONTACT</Link>
          <SimpleMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}