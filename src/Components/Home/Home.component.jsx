import React from 'react';
import Header from '../Header/Header.component';
import RecipeReviewCard from '../Card/Card.component';
import Video from '../Video Component/Video.component';
import ScrollArrow from '../TopArrow/TopArrow.component';
import Footer from '../Footer/FooterComponent';
import "./Home.styles.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ReactDOM from "react-dom"; 
import CarouselNew from "../CarouselNew/CarouselNew.Component";
import "../CarouselNew/CarouselNew.styles.scss";

AOS.init();

function Home() {
    const images = [
        {
          description: "Mountains at night",
          src:
            "../../1-edited.png"
        },
        {
          description: "Mountains with snow",
          src:
            "https://images.unsplash.com/photo-1516461240763-822a87484851?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1019&q=80"
        },
        {
          description: "Mountains with grass",
          src:
            "https://images.unsplash.com/photo-1509941943102-10c232535736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        },
        {
          description: "Brown Mountains",
          src:
            "https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1042&q=80"
        }
      ];
    return(
        <div>
            <CarouselNew initialStep={1} images={images}/>
                <div className="cards-container">
                    <div data-aos="fade-up" data-aos-offset="-500" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                        <RecipeReviewCard src="https://images.unsplash.com/photo-1507679622673-989605832e3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-500" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                        <RecipeReviewCard src="https://images.unsplash.com/photo-1451477334999-a9321157a431?ixlib=rb-1.2.1&auto=format&fit=crop&w=1429&q=80" />
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-500" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                        <RecipeReviewCard src="https://images.pexels.com/photos/364822/rolex-watch-time-luxury-364822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-500" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                        <RecipeReviewCard src="https://images.pexels.com/photos/1353065/pexels-photo-1353065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-500" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                        <RecipeReviewCard src="https://images.pexels.com/photos/3809175/pexels-photo-3809175.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                    <div data-aos="fade-up" data-aos-offset="-500" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false" data-aos-anchor-placement="top-center">
                        <RecipeReviewCard src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </div>
                </div>
                <Video />
                <ScrollArrow />
            
        </div>
    )
}

export default Home;