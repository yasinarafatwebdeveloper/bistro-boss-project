// import React from 'react';

import SectionTitle from "../SectionTitle/SectionTitle";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { useEffect, useState } from "react";
const Testimonials = () => {

const [reviews,setReviews]=useState([])

useEffect(()=>{

fetch("http://localhost:5000/reviews")
.then(res=>res.json())
.then(data=>setReviews(data))
},[])

    return (
        <section>
            <SectionTitle subheading="All testimonials" heading="TESTIMONIALS"></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       
        {
            reviews.map(review=> <SwiperSlide key={review._id}>

      <div className="m-20">

        <p>{review.details}</p>
        <p className="text-2xl text-orange-500">{review.name}</p>
      </div>
            </SwiperSlide>)
        }
      </Swiper>
        </section>
    );
};

export default Testimonials;