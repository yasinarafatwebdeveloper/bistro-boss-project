// import React from 'react';

// import MenuItem from "../../Shared/MenuItem/MenuItem";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Slider from "../Slider/Slider";
import Testimonials from "../Testimonials/Testimonials";
// import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            {/* this is home property */}
            <Helmet>
        <title>Hello World|| home</title>
    
      </Helmet>
            <Banner></Banner>
            <Slider></Slider>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            
        </div>
    );
};

export default Home;