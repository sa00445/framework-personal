import React from 'react';
import "./About.styles.scss"

function About() {
    return(
        <div className="about-container">
            <div className="about-div">
                <div className="aboutText">
                <h4>About Us</h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget euismod tortor. Proin luctus consectetur ex ac tristique. Morbi porttitor ipsum a tempus lacinia. Morbi id urna varius leo congue tempor. Nam sit amet mauris et ipsum luctus aliquam vel nec metus. Maecenas non risus at erat semper viverra at at leo. Aenean finibus, libero nec feugiat eleifend, sem risus vestibulum lacus, vitae iaculis arcu nibh vitae eros. Aenean tincidunt, dolor eu porta accumsan, nunc massa maximus nulla, ac sagittis sem augue nec ipsum. Nam vel rhoncus magna. Cras nulla augue, condimentum eget pharetra non, consectetur eget dui. Curabitur rhoncus sed eros at mattis.
                <br />
                <br />
                <br />
                Etiam congue ipsum nibh, eget condimentum mi malesuada vel. Aenean tincidunt, purus eget cursus placerat, diam velit ullamcorper lorem, id volutpat enim eros at arcu. Phasellus semper tortor in dui laoreet eleifend. Etiam finibus tellus eu neque fringilla faucibus. Curabitur vitae felis quis ipsum condimentum congue eu vitae nibh. Nulla sit amet sollicitudin lorem. Nunc ac nulla nec libero faucibus viverra eu eget arcu. Etiam et purus a tortor rutrum blandit. Aenean venenatis felis ante, ac mollis orci maximus nec.
                </div>
                <div className="aboutImgDiv">
                    <img className="aboutImg" src="https://images.unsplash.com/photo-1523268755815-fe7c372a0349?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                </div>
            </div>
        </div>
    )
}

export default About;