// import React from 'react';
import { useContext, useEffect,  useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Home/Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialSite from '../SocialSite/SocialSite';


const Login = () => {
const {loginItem,user}=useContext(AuthContext)
const[disabled,setDisabled]=useState(true)
const location=useLocation()
console.log(location)
const navigate=useNavigate()
useEffect(()=>{

 loadCaptchaEnginge(6) 

},[])

const handleLoginSubmit=(event)=>{

event.preventDefault()
const form=event.target;
const email=form.email.value;
const password=form.password.value;
// console.log(email,password)
loginItem(email,password)
.then(result=>{
  console.log(result.user)

  Swal.fire({
    title: "You have succesfully login",
    showClass: {
      popup: `
        animate__animated
        animate__fadeInUp
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutDown
        animate__faster
      `
    }
  });

  navigate(location?.state?location.state:"/")
  
})
.catch(error=>{
  console.log(error)
})
}
const handleValidationCaptcha=(e)=>{
  e.preventDefault()
  const captcha=e.target.value
  console.log(captcha)
// const form=e.target.closest("form")
// const captcha=form.captcha.value;
// // console.log(captcha)

// if(validateCaptcha(captcha)==true){

// setDisabled(false)

// }
//  else{
//   setDisabled(true)
//  }

// const captcha=captchaRef.current.value;

if(validateCaptcha(captcha)==true){

  setDisabled(false)
  
  }
   else{
    setDisabled(true)
   }


}

    return (
        <>
        <Helmet>
          <title>Login|| item</title>
        </Helmet>
        <div className="pt-20">
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-1/2">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLoginSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>

         <div className="form-control">
          <label className="label">
       < LoadCanvasTemplate />
          </label>
          <input type="text" onBlur={handleValidationCaptcha}  name="captcha" placeholder=" type the captcha items here" className="input input-bordered" required />
          {/* <button onClick={handleValidationCaptcha} className="btn btn-outline btn-xs mt-5">Validate</button> */}
        </div>

        <div className="form-control mt-6">
         
          <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
        </div>
      </form>

      <div>
        <SocialSite></SocialSite>
      </div>
      <p><small>New here? <Link to={"/logout"}>Create an Account</Link> </small></p>
    </div>
  </div>
</div>
        </div>
        </>
    );
};

export default Login;