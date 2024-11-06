// // import React from 'react';

// import { useForm } from "react-hook-form";
// import { Link } from "react-router-dom";

// const Logout = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();


//     const onSubmit = data =>{
//         console.log(data);

//     } 


//     return (
//         <div>
//             <div className="hero bg-base-200 min-h-screen">
//   <div className="hero-content flex-col lg:flex-row-reverse">
  
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
//       <form onSubmit={handleSubmit(onSubmit)}  className="card-body">

//       <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input type="text"{...register("name", { required: true })} name="name" placeholder="Please type your Name" className="input input-bordered" required />

//           {errors.name && <span>This field is required</span>}
//         </div>

//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="email" {...register("email",{required:true})} name="email" placeholder="email" className="input input-bordered" required />

//           {errors.email && <span>This field is required</span>}
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="password" {...register("email",{required:true})} name="password" placeholder="password" className="input input-bordered" required />
         
//           {errors.password && <span>This field is required</span>}
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Logout</button>
       
//         </div>
//       </form>
//       <p><small>Now You are <Link to={"/login"}>Login</Link> </small></p>
//     </div>
//   </div>
// </div>
//         </div>
//     );
// };

// export default Logout;


import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import AxiosPublic from "../../Hooks/AxiosPublic";
import Swal from "sweetalert2";
import SocialSite from "../../Components/SocialSite/SocialSite";

const Logout = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const axiosPublic=AxiosPublic()
    const{createUser,myUpdateProfile}=useContext(AuthContext)
    const navigate=useNavigate()
    const onSubmit = (data) => {
        console.log("Logging out with data:", data);
        createUser(data.email,data.password)
        .then(result=>{
            console.log(result.user)
            myUpdateProfile(data.name, data.photoUrl)
            .then(()=>{
                console.log("update profile is successfully")

                  const userInformation={
                    name:data.name,
                    email:data.email
                  }  
                  axiosPublic.post("/users",userInformation)
                  .then(res=>{
                    console.log(res.data.user)
                    if(res.data.insertedId){

                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                    
                    
                      reset()
                      navigate("/")

                  })

                  .catch(error=>{
                    console.log("this error item",error)
                  })
                //   fetch("http://localhost:5000/users",{
                //     method:"post",
                //     headers:{
                //         "Content-Type": "application/json",
                //     },
                //     body:JSON.stringify(userInformation)
                //   })
                // .then((res=>{
                //     console.log("yasin arafat ",res.user)
                // }))
                // .catch(error=>{
                //     console.log(error)
                // })
                // navigate("/")

            })

            .catch(error=>{
                console.log(error)
            })
        })
       .catch(error=>{
        console.log(error)
       })
    };

    return (
      <>
      <Helmet>
        <title>Sign up|| Sign up</title>
    
      </Helmet>
      <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mt-10">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", { required: true })}
                                    placeholder="Please type your Name"
                                    className="input input-bordered"
                                />
                                {errors.name && <span>Name is required</span>}
                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("photoUrl", { required: true })}
                                    placeholder="Please type your Name"
                                    className="input input-bordered"
                                />
                                {errors.photoUrl && <span>PhotoUrl is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    placeholder="Email"
                                    className="input input-bordered"
                                />
                                {errors.email && <span>Email is required</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", { required: true,
                                        minLength:8, 
                                        maxLength: 19,
                                        pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,19}$/
                                        // pattern:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}/
                                        

                                    
                                    })}
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                   {errors.password?.type === 'minLength' && <p className="text-xl text-red-700">Password must be 8 charecter</p>}

                                 {errors.password?.type === 'maxLength' && <p className="text-xl text-red-700">Password must be less than 19 charecter</p>}


                                 
                                 {errors.password?.type === 'pattern' && <p className="text-xl text-red-700">Password  must be one digit,one uppercase,one lowercase and eight charecter</p>}
                            </div>

                            <div className="form-control mt-6">
                                
                                <input  className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialSite></SocialSite>
                        <p><small>Now you are <Link to={"/login"}>Login</Link></small></p>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
};

export default Logout;







