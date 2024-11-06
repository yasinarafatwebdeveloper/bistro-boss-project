// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { MdDelete } from "react-icons/md";
import { FaPeopleCarry } from "react-icons/fa";
import Swal from "sweetalert2";
// import {  useState } from "react";

const AllUsers = () => {
  // const [deleteUser,setDeleteUser]=useState([])
const axiosSecure=UseAxiosSecure()
const{refetch,data:users=[]}=useQuery({

 queryKey: ['users'],
queryFn:async()=>{
const res= await axiosSecure.get("/users")
return res.data
}

})
const handleDeleteIcon=(id)=>{
 
fetch(`http://localhost:5000/users/${id}`,{
  method:"DELETE"
})
.then(res=>res.json())
  .then(data=>{
    console.log(data)
    if(data.deletedCount>0){
      refetch()
    }
  })
  // console.log(id)
  

// const remainingDelete=users.filter(deleteData=>deleteData._id!==id)
//  setDeleteUser(remainingDelete)

}

const handleMakeAdmin=(user)=>{
console.log(user)

axiosSecure.patch(`/users/admin/${user._id}`)
.then(res=>{
  console.log(res.data)
  if(res.data.modifiedCount>0)
refetch()
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: `${user.name} is a admin`,
    showConfirmButton: false,
    timer: 1500
  });

})
}



    return (
        <div>
            <div className="flex justify-evenly mx-3">
                <h2 className="text-3xl ">User items{users.length}</h2>
                <h2 className="text-3xl">Total All Users</h2>
            </div>



            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
users.map((user,index)=> <tr key={user._id} className="bg-base-200">
    <th>{index+1}</th>
    <td>{user.name}</td>
    <td>{user.email}</td>
{/* {
   user
 } */}
  {user.role==="admin"?"Admin":<button onClick={()=>handleMakeAdmin(user)}><td><FaPeopleCarry className="text-3xl"></FaPeopleCarry></td></button>}
    <td>
<button onClick={()=>handleDeleteIcon(user._id)}>
<MdDelete  className="text-3xl"></MdDelete>
</button>
      </td>
  </tr>)
     }
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;