// import React from 'react';
import feature from "../../assets/home/featured.jpg"
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Feature.css"

const Featured = () => {
    return (
        <div className="featured-item bg-fixed">
            <SectionTitle subheading="Check it out" heading="Feature item">

            </SectionTitle>

            <div className="flex justify-center items-center">
                <div>
                    <img className="w-96" src={feature} alt="" />
                </div>
                <div className="mx-8">
                    <h2>Paralax item</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos hic perspiciatis delectus culpa, repudiandae quam facere nobis alias cum dolor.</p>
                    <button className="btn btn-outline border-0 border-b-4">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Featured;