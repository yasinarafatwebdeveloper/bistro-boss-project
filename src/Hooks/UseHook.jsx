import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react"
import AxiosPublic from "./AxiosPublic";


const UseHook=()=>{
    const axiosPublic=AxiosPublic()
    // const [menu,setMenu]=useState([])
    // useEffect(()=>{
    //     fetch("http://localhost:5000/menu")
    //     .then(res=>res.json())
    //     .then(data=>{
    //     setMenu(data)
    //     })
       
    // },[])

const {data:menu=[],refetch}=useQuery({

    queryKey:["menu"],
    queryFn:async()=>{
    const res=await axiosPublic.get("/menu")
        const result=res.data;
        return result
        
    }
})

    return[menu,refetch]
}

export default UseHook;




