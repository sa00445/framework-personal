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
import SimpleMenu from '../SimpleMenu/SimpleMenu.Component'
import ImageAvatars from '../Avatar/Avatar.Component'


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
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            POPTROPICA
          </Typography>
          <Link className="link" color="inherit" to='/'>HOME</Link>
          <Link className="link" color="inherit" to='/about'>ABOUT</Link>
          <Link className="link" color="inherit" to='/contact'>CONTACT</Link>
          <Link className="link" color="inherit" to='/login'>LOG IN</Link>
          <Link className="link" color="inherit" to='/Signup'>SIGN UP</Link>
          <SimpleMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
}