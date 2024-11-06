import { useContext } from "react";
import { AuthContext } from "../Home/Provider/AuthProvider";


const UseContext = () => {
   const auth=useContext(AuthContext);
   return auth
};

export default UseContext;