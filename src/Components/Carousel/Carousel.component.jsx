import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.styles.scss'

export default class SimpleSlider extends Component {
  render(props) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={this.props.src1}/>
          </div>
          <div>
          <img src={this.props.src2}/>
          </div>
          <div>
          <img src={this.props.src3}/>
          </div>
          <div>
          <img src={this.props.src4}/>
          </div>
          <div>
          <img src={this.props.src5}/>
          </div>
        </Slider>
      </div>
    );
  }
}