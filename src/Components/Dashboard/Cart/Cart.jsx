// import React from 'react';

import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseCardHook from "../../../Hooks/UseCardHook";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
const Cart = () => {


  // const [cart]=UseCardHook()
// const axiosSecure= UseAxiosSecure()
const [cart,setCart]=useState([])
useEffect(()=>{

  fetch("http://localhost:5000/carts")
  .then(res=>res.json())
  .then(data=>setCart(data))
},[])
// const [deleteItem,setDeleteItem]=useState([])
// const handleDeleteItems=(id)=>{


//     Swal.fire({
//         title: "Are you sure?",
//         text: "You won't be able to revert this!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes, delete it!"
//       }).then((result) => {
//         if (result.isConfirmed) {   
// console.log(id)
// axiosSecure.delete(`carts/${id}`)


       

// .then(res=>{

 
//     if(res.data.deletedCount>0){
//       const deleteData=deleteItem.filter(items=>items._id!==id)
//       console.log(deleteData)
//               setDeleteItem(deleteData)
//         Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success"
//           });
//     }
// })
//         }
//       });

// }

const handleDeleteItems=(id)=>{
console.log("this is handledelete",id)
fetch(`http://localhost:5000/carts/${id}`,{

  method:"DELETE"
})
.then(res=>res.json())
.then(data=>{
  console.log(data)

if(data.deletedCount>0){


 const remaining= cart.filter(deleteData=>deleteData._id !==id)
 console.log(remaining)
 setCart(remaining)
// alert("deleted item is successfully")
}


})




}
console.log("please cart price show me",cart)
  const totalPrice= cart.reduce((accumulator,currentPrice)=> accumulator+currentPrice.price,0)
    return (
        <div>
            {/* this is cart */}
            <div className="text-3xl p-4">  <h2>this is card {cart.length}</h2></div>

            <div>
                <h2>total price show here{totalPrice}</h2>
             


<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
       
        </th>
      
        <th>image</th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
                cart.map(item=><tr key={item._id}>
                    <th>
                    
                    </th>
                    
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item?.cartDetail?.image}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                 
                        </div>
                      </div>
                    </td>



                    <td>
                      {item?.cartDetail.name}
                      <br />
                   
                    </td>
                    <td>{item?.cartDetail?.email}</td>
                    <th>
                      <button onClick={()=>handleDeleteItems(item?._id)} className="btn btn-ghost btn-xs">
                      <MdDelete className="text-2xl" />
                      </button>
                    </th>
                  </tr>)
              }
      
      
    </tbody>

    
  </table>
</div>
              
            </div>


          
        </div>
    );
};

export default Cart;







