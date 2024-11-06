
import SectionTitle from '../../../Home/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from "react-icons/fa";
// import {AxiosPublic}from"../../../../src/Hooks/AxiosPublic"
import AxiosPublic from "../../../Hooks/AxiosPublic"
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key=import.meta.env.VITE_IMAGE_API_KEY
const image_hosting_api=`https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItem = () => {
  const axiosSecure=UseAxiosSecure()
const axciosPublic=AxiosPublic()
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) =>{
        console.log(data)

const imgFile={image:data.image[0]}
    const res= await axciosPublic.post(image_hosting_api,imgFile,{

      headers: {'Content-Type': 'multipart/form-data' },
    })
    if(res.data.success){


const menuItem={
category:data.category,
name:data.name,
price:parseFloat(data.price),
image:res.data.data.display_url

}

const menuRes= await axiosSecure.post("/menu",menuItem)
console.log(menuRes)

if(menuRes.data.insertedId){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500
  });
}

    }
      console.log(res.data)
    
    };


    return (
        <div>
           <SectionTitle heading="Add an items" subheading="Whats news?"></SectionTitle>
           <div>
           <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input {...register("name")} /> */}
        <div>

      
      <label className="form-control w-full px-3 ">
  <div className="label">
    <span className="label-text">What is your name?</span>

  </div>
  <input type="text"
   placeholder="recipe name"
      required
    {...register("name",{required: true,})}
    className="input input-bordered w-full px-3 " />
  
</label>
</div>
    {/*  */}

    <div className='flex'>
        <div className='w-full px-3 my-4'>
        <div className="label">
    <span className="label-text">What is your name?</span>

  </div>
       
    <select {...register("category", {required: true,})} className="select select-bordered w-full ">
  <option disabled selected>Our category items select here</option>
  <option value="salad">Salad</option>
  <option value="pizza">Pizza</option>
  <option value="soup">Soup</option>
  <option value="dessert">Dessert</option>
  <option value="drinks">Drinks</option>
  
  </select>
  </div>
  <div className='w-full px-3 my-4'>
  <div className="label">
    <span className="label-text">What is your name?</span>

  </div>
  <input type="price"
   placeholder="Product Price"
   {...register("price",{required: true,})}
    className="input input-bordered w-full " />
  </div>
    </div>
      <div className='px-3'>
      <div className="label">
    <span className="label-text">What is your name?</span>

  </div>
      <textarea
  placeholder="Bio"
  {...register("textarea",{required: true,})}

  className="textarea textarea-bordered textarea-lg w-full"></textarea>
      </div>
<div className='w-full mt-3'>
<input type="file" {...register("image",{required: true,})} className="file-input file-input-bordered w-full max-w-xs" />
</div>
     <button className='btn mt-4'>
     Additem<FaUtensils></FaUtensils>
   
     </button>
    </form>
           </div>
        </div>
    );
};

export default AddItem;