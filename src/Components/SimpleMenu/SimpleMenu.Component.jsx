import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from "react-router-dom";
import ImageAvatars from '../Avatar/Avatar.Component';
import './SimpleMenu.styles.scss';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ImageAvatars />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link className="our-link" to="/login">Log In</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="our-link" to="/signup">Sign Up</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="our-link" to="/">Logout</Link></MenuItem>
      </Menu>
    </div>
  );
}