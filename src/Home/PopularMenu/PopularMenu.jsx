// import React from 'react';

// import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import UseHook from "../../Hooks/UseHook";
// import CustomHook from "../../UseCustom/UseCustom";

const PopularMenu = () => {
 
const [menu]=UseHook()

const population=menu.filter(item=>item.category=="population")

    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch("Menu.json")
    //     .then(res=>res.json())
    //     .then(data=>{
    //      const popularItems=data.filter(item=>item.category==="popular")
    //      setMenu(popularItems)
    //     })
    // },[])

    return (
        <section>
            <SectionTitle subheading={"Over Menue"} heading={"FROM OUR MENU"} >
                
            </SectionTitle>

            <div className="grid grid-cols-2 gap-5">
                {
                    population.map(item=><MenuItem key={item._id} item={item}></MenuItem>)
                }
         </div>


        </section>
    );
};

export default PopularMenu;