// import React from 'react';

import { MdDelete, MdUpdate } from "react-icons/md";
import SectionTitle from "../../Home/SectionTitle/SectionTitle";
import UseHook from "../../Hooks/UseHook";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";

const Management = () => {

const[menu,refetch]=UseHook()
const axiosSecure=UseAxiosSecure()
const handleDeleteClick= (item)=>{
console.log(item)


Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(  async (result) => {
    if (result.isConfirmed) {

const res= await axiosSecure.delete(`/menu/${item._id}`)
console.log(res.data);

if(res.data.deletedCount){
refetch()
  Swal.fire({
    title: "Deleted!",
    text: "Your file has been deleted.",
    icon: "success"
  });
}


    
    }
  });


}
const handleUpdate=()=>{



}



    return (
        <div>
            <h2>this is management items</h2>
            <SectionTitle heading="this is heading" subheading="this is management item"></SectionTitle>

            <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         Serial
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Update</th>
       
      </tr>
    </thead>
    <tbody>
      {menu.map((item,index)=>  <tr key={item._id}>
        <th>
        {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
         {item.name}
        </td>
        <td>{item.price}</td>

        <th>
        <button onClick={()=>handleDeleteClick(item)}  className="btn btn-ghost ">
                      <MdDelete className="text-4xl text-red-700  " />
                      </button>
        </th>
        <th>
        <button onClick={handleUpdate}  className="btn btn-ghost  text-green-600">
                      <MdUpdate   className="text-4xl" />
                      </button>
        </th>
      </tr>)}
    
     
     
     
    </tbody>
    
  </table>
</div>
            </div>



        </div>
    );
};

export default Management;