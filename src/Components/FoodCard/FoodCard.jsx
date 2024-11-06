// import React from 'react';

import { useLocation, useNavigate } from "react-router-dom";
import UseContext from "../../Hooks/UseContext";
// import axios from 'axios';
import Swal from 'sweetalert2'
import { AuthContext } from "../../Home/Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
// import UseCardHook from "../../Hooks/UseCardHook";
const FoodCard = ({item}) => {
    const{name,image,price,recipe,_id}=item
const navigate=useNavigate()
const location=useLocation()
    const{user}=UseContext(AuthContext);
    const axiosSecure=UseAxiosSecure()
    // const [,refetch]=UseCardHook()
    const handleAddToCart=(food)=>{
if(user && user.email){
  // alert("success")

  const cartDetail={
menuId:_id,
email:(user.email),
// name:(user.name),
name,
image,
price,
recipe


  }
axiosSecure.post("/carts",{cartDetail})
.then(res=>{
  console.log(res.data)
if(res.data.insertedId){

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your are successfully",
    showConfirmButton: false,
    timer: 1500
  });

  // refetch()
}
})

}
else{

  Swal.fire({
    title: "You are not login",
    text: "Please login to add to the card",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, login"
  }).then((result) => {
    if (result.isConfirmed) {
      navigate("/login");
      // send user the login page
      // Swal.fire({
      //   title: "Deleted!",
      //   text: "Your file has been deleted.",
      //   icon: "success"
      // });
    }
  });
}
// console.log(food,user.email)
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p>${price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;