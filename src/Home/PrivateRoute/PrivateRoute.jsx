import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
const location=useLocation()
console.log(location)
    const{user,loading}=useContext(AuthContext)
    if(loading){
       return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"} state={location.pathname}></Navigate>
};

export default PrivateRoute;