import React from 'react';
import Header from '../Header/Header.component';
import RecipeReviewCard from '../Card/Card.component';
import Video from '../Video Component/Video.component';
import Carousel from '../Carousel/Carousel.component';
import ScrollArrow from '../TopArrow/TopArrow.component';
import Footer from '../Footer/FooterComponent';
import "./Home.styles.scss"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function Home() {
    return(
        <div>
                <Carousel title={"Our Work"} src1={require("../../../src/1-edited.png")} src2={"https://images.unsplash.com/flagged/photo-1564826836200-87e3faad54bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80"} src3={"https://images.unsplash.com/photo-1451290173668-9a14beaf714c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80"} src4={"https://images.unsplash.com/photo-1512034705137-dc51c5ed36f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1042&q=80"} src5={"https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80"} />
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