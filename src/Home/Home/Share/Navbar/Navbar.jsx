import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import UseCardHook from "../../../../Hooks/UseCardHook";
// import axios from 'axios';
const Navbar = () => {



  const{user,logOutItem}=useContext(AuthContext)
  // const [upper,setUpper]=useState([])
//   useEffect(()=>{

// axios.get("http://localhost:5000/carts")
// // .then(res=>res.json())
// // .then(data=>setUpper(data))

// .then(res=>{
  
//     setUpper(res.data)
  
  
// })
//   },[])
// const[cart]=UseCardHook()
const[cart]=UseCardHook()
const handleLogOut=()=>{
  logOutItem()
  .then(()=>{

  })
  .catch(error=>{
    console.log(error)
  })
}



    const navOption=<>
    
    <li><Link to="/">
    Home
 </Link></li>
        
          Parent
          
        
        
       <li><Link to="/menu"> Our menu</Link></li>
       <li><Link to="/order/salad"> Food Order</Link></li>
       <li><Link to="/security"> Security</Link></li>
       {/* <li><Link to="/"> <img src={upper.image} alt="" /></Link></li> */}

       <li><Link to="/dashboard/cart"> 
       <button className="btn">
       <FaShoppingCart className="mr-2" />

  <div className="badge badge-secondary">{cart.length}</div>
</button>
       </Link></li>


       {/* <li><Link to="/logout"> LogOut</Link></li> */}

{user?<>
{/* <p>{user.displayName}</p> */}
  <button onClick={handleLogOut} className="btn btn-active btn-ghost">Logout</button>
</>:<>       <li><Link to="/login"> Login</Link></li></>}


    </>
    return (
        <div>
            <div className="navbar fixed z-20 bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {navOption}
      
      </ul>
    </div>
    {/* <a className="btn btn-ghost text-xl">daisyUI */}
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 absolute">
     {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button */}
  </div>
</div>
        </div>
    );
};

export default Navbar;