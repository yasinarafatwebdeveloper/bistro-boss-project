
import {Helmet} from 'react-helmet-async';
import Cover from '../Share/Cover/Cover';
import imageOne from"../../../assets/menu/banner3.jpg"
import SectionTitle from '../../SectionTitle/SectionTitle';
import UseHook from '../../../Hooks/UseHook';

import MenuCategory from './MenuCategory/MenuCategory';
import image1 from"../../../assets/menu/dessert-bg.jpeg"
import image2 from"../../../assets/menu/salad-bg.jpg"
import image3 from"../../../assets/menu/pizza-bg.jpg"

const Menu = () => {

const[menu]=UseHook()
const offered=menu.filter(offer=>offer.category=="offered")
const desserd=menu.filter(desserd=>desserd.category=="dessert")
const salads=menu.filter(salad=>salad.category=="salad")
const pizzas=menu.filter(pizza=>pizza.category=="pizza")

    return (
        <div className="pt-14">
            <Helmet>
        <title>Hello World</title>
    
      </Helmet>
           
      
            <Cover img={imageOne} title={"Our Menue"}></Cover>
            <SectionTitle subheading="don not Miss" heading="Todays Offers">

            </SectionTitle>
            {/* <PopularMenu></PopularMenu> */}

           <MenuCategory items={offered}></MenuCategory>
           <MenuCategory items={desserd} img={image1} title={"Our Dessert"} ></MenuCategory>
           <MenuCategory items={salads} img={image2} title={"Our Salad"} ></MenuCategory>
           <MenuCategory items={pizzas} img={image3} title={"Our Pizzas"} ></MenuCategory>
        </div>
    );
};

export default Menu;