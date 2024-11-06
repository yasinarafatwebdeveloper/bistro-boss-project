import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseCardHook from "../Hooks/UseCardHook";
import { useContext } from "react";
// import { AuthContext } from "../Home/Provider/AuthProvider";


const Dashboard = () => {
    const[cart]=UseCardHook()
   //  const{loading}=useContext(AuthContext)
   //  if(loading){
   //    return <span className="loading loading-dots loading-lg"></span>
   //  }
    const isAdmin=true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-300">
                <h2>this is Dashboard</h2>
                <ul className="menu">

                {
                    isAdmin?<>
                    <li>
                 <NavLink to={"/dashboard/adminHome"}>
                 <FaHome></FaHome>
                  AdminHome</NavLink>
                 </li>


                 <li>
                 <NavLink to={"/dashboard/addItems"}>
           
               <FaUtensils></FaUtensils>
                  Add-Items</NavLink>
                 </li>

                 <li>
                 <NavLink to={"/dashboard/bookings"}>
                    <FaBook></FaBook>
                  ManageBookings</NavLink>
                 </li>
                 <li>
                 <NavLink to={"/dashboard/manageItems"}>
                <FaList></FaList>
                  ManageItems</NavLink>
                 </li>

                 <li>
                 <NavLink to={"/dashboard/users"}>
                 <FaUsers></FaUsers>
                  All Users</NavLink>
                 </li>
                    </>:<>
                    
                    <li>
                 <NavLink to={"/dashboard/adminHome"}>
                 <FaHome></FaHome>
                  AdminHome</NavLink>
                 </li>


                 <li>
                 <NavLink to={"/dashboard/addItems"}>
           
               <FaUtensils></FaUtensils>
                  Add-Items</NavLink>
                 </li>

                 <li>
                 <NavLink to={"/dashboard/bookings"}>
                    <FaBook></FaBook>
                  ManageBookings</NavLink>
                 </li>
                 <li>
                 <NavLink to={"/dashboard/manageItems"}>
                <FaList></FaList>
                  ManageItems</NavLink>
                 </li>

                 <li>
                 <NavLink to={"/dashboard/users"}>
                 <FaUsers></FaUsers>
                  All Users</NavLink>
                 </li>
                    </>
                }



                 
  <div className="divider">OR</div>
                <li>  
                 <NavLink to={"/"}>
                 <FaHome></FaHome>
                    Home</NavLink>
                 </li>

                 <li>  
                 <NavLink to={"/order/salad"}>
                 <FaSearch></FaSearch>
                    Menu</NavLink>
                 </li>

                 
                 <li>  
                 <NavLink to={"/order/contact"}>
                 {/* <FaSearch></FaSearch> */}
                 <FaEnvelope></FaEnvelope>
                    Contact</NavLink>
                 </li>
                </ul>
             
            </div>
            <div className="flex-1 ">
            <Outlet></Outlet>
           
            {/* <h2>hello</h2> */}
            </div>
        </div>
    );
};

export default Dashboard;