import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../Home/Home/Share/Footer/Footer";
import Navbar from "../../Home/Home/Share/Navbar/Navbar";
// import Banner from "../../Home/Banner/Banner";


const Main = () => {

const location=useLocation()
// console.log(location.pathname.includes("login"))
const notNavbarFooter=location.pathname.includes("login")||location.pathname.includes("logout")




    return (
        <div>
           {notNavbarFooter || <Navbar></Navbar>}
            {/* <Banner></Banner> */}
            <Outlet></Outlet>
            {notNavbarFooter || <Footer></Footer>}
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;