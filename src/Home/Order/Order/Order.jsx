// import React from 'react';

import Cover from "../../Home/Share/Cover/Cover";
import imageShop from"../../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import UseHook from "../../../Hooks/UseHook";
// import FoodCard from "../../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const Order = () => {


  const categories=['salad','pizza','soup','dessert','drinks']
  const {category}=useParams();
  const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex)

console.log(category)
const[menu]=UseHook()


const salads=menu.filter(salad=>salad.category=="salad")
const pizzas=menu.filter(pizza=>pizza.category=="pizza")
const soups=menu.filter(soup=>soup.category=="soup")
const desserd=menu.filter(desserd=>desserd.category=="dessert")
const drinks=menu.filter(offer=>offer.category=="drinks")
    return (
        <div className="pt-20">
          <Helmet>
            <title>Bristo boss || Order food</title>
          </Helmet>

            <Cover img={imageShop} title={"Order Shop"}></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) =>setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
  <OrderTab items={salads}></OrderTab>
  </TabPanel>
  <TabPanel>
    <div>
        <OrderTab items={pizzas}></OrderTab>
    </div>
  </TabPanel>
  <TabPanel>
  <OrderTab items={soups}></OrderTab>
  </TabPanel>

  <TabPanel>
  <OrderTab items={desserd}></OrderTab>
  </TabPanel>
  <TabPanel>
  {/* <OrderTab items={desserd}></OrderTab> */}
  </TabPanel>
  <TabPanel>
  <OrderTab items={drinks}></OrderTab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;