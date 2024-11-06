import {  useQuery } from "@tanstack/react-query";
// import axios from "axios";
import UseAxiosSecure from "./UseAxiosSecure";
// import UseContext from "./UseContext";


const UseCardHook = () => {
const axiosSecure=UseAxiosSecure()
// const{user}=UseContext()
// console.log(user.email)
const{data:cart=[]}=useQuery({
  
queryKey:["cart"],
queryFn:async()=>{
   // console.log(cart)
    const res=await axiosSecure('/carts')
    console.log(res)
    // console.log(user.email)
   return res.data
}


})
   return [cart]
};

export default UseCardHook;





















// const axiosSecure=UseAxiosSecure()
// const{data:cart=[]}=useQuery({

//     queryKey:["cart"],
//     queryFn:async ()=>{
//         const res=await axiosSecure.get("/carts")
//         return res.data
//     }
// })
// return [cart];