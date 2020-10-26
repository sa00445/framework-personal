import React from 'react';
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./DetailsComponent.scss"
 

class Slider extends React.Component {
  render() {
    return (
        <div className="parent-container">
            <div className="slider-container">
                <ImageGallery {... (
                    {
                    thumbnailPosition: "left",
                    useBrowserFullscreen: true,
                    showPlayButton: true,
                    showIndex: true,
                    height: "400px",
                    width: "400px",
                    items: [
                        {
                            original: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/Black_Hole_TQN-3333-03L_1800x1800.jpg?v=1578507275',
                            thumbnail: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/Black_Hole_TQN-3333-03L_1800x1800.jpg?v=1578507275',
                        },
                        {
                            original: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-edition-black-hole-lume_1800x1800.jpg?v=1593118289',
                            thumbnail: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-edition-black-hole-lume_1800x1800.jpg?v=1593118289',
                        },
                        {
                            original: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-edition-black-hole-day_1800x1800.jpg?v=1593118289',
                            thumbnail: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-edition-black-hole-day_1800x1800.jpg?v=1593118289',
                        },
                        {
                            original: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/Xeric-Trappist1-NASA-edition-xeric-trappist-1-nasa-quartz-caseback-black-hole__32178.1564700615.1280.1280_1800x1800.jpg?v=1593118289',
                            thumbnail: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/Xeric-Trappist1-NASA-edition-xeric-trappist-1-nasa-quartz-caseback-black-hole__32178.1564700615.1280.1280_1800x1800.jpg?v=1593118289',
                        },  {
                            original: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-wrist-20_720x.jpg?v=1593118289',
                            thumbnail: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-wrist-20_720x.jpg?v=1593118289',
                        },  {
                            original: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-lifestyle-41_720x.jpg?v=1593118289',
                            thumbnail: 'https://cdn.shopify.com/s/files/1/0074/5432/6835/products/xeric-trappist-1-nasa-lifestyle-41_720x.jpg?v=1593118289',
                        },  {
                            original: 'https://simg.nicepng.com/png/small/237-2374440_your-details-twitter-video-play-button.png',
                            thumbnail: 'https://simg.nicepng.com/png/small/237-2374440_your-details-twitter-video-play-button.png',
                        }, 
                    ]
                    })}/>
            </div>
            <div className="description-container">
                <h1>Seiko SK3189 Watch</h1>
                <div className="reviews">
                    <div className="stars">
                        <span class="far fa-star"></span>
                        <span class="far fa-star"></span>
                        <span class="far fa-star"></span>
                        <span class="far fa-star"></span>
                        <span class="far fa-star"></span>
                    </div>
                    <div className="review-link">
                        <Link to="">Write a review</Link>
                    </div>
                </div>
                <span className="price">$300.00 USD</span>
                <button className="custom-button cart-btn">ADD TO CART</button>
                <button className="custom-button offer-btn">Make an offer</button>
                <div className="features">
                    <div>
                        <i class="fas fa-paper-plane fa-2x"></i>
                        <p>Free Shipping Worldwide*</p>
                    </div>
                    <div>
                    <i class="fas fa-calendar-alt fa-2x"></i>
                        <p>30 Day Returns</p>
                    </div>
                    <div>
                        <i class="fas fa-shield-alt fa-2x"></i>
                        <p>Authorized Dealer</p>
                    </div>
                    <div>
                        <i class="fas fa-lock fa-2x"></i>
                        <p>Free Shipping Worldwide*</p>
                    </div>
                </div>
                <hr className="line-break" />
                <div className="socials">
                    <div>
                        <i class="fab fa-facebook-f"><span className="social-span">Share</span></i>
                    </div>
                    <div>
                        <i class="fab fa-twitter"><span className="social-span">Tweet</span></i>
                    </div>
                    <div>
                        <i class="fab fa-pinterest-p"><span className="social-span">Pin it</span></i>
                    </div>
                </div>
            </div>
        </div>);
  }
}

export default Slider
