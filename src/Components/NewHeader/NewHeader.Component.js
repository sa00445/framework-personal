import React from 'react';
import './NewHeader.styles.scss';
import { Link } from "react-router-dom";
import SimpleMenu from '../SimpleMenu/SimpleMenu.Component';

export default function NewHeader() {
    const myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }
    return (
        <div className="new-header-container">
            <div class="topnav" id="myTopnav">
                <a href="/" class="active">HOME</a>
                <Link className="link" color="inherit" to='/about'>ABOUT</Link>
                <Link className="link" color="inherit" to='/contact'>CONTACT</Link>
                <Link className="link" color="inherit" to='/login'>LOGIN</Link>
                <Link className="link" color="inherit" to='/signup'>SIGN UP</Link>
                <SimpleMenu />
                <a href="javascript:void(0);" class="icon" onClick={myFunction}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
    )
}