import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
 export const AuthContext=createContext(null)


 const auth = getAuth(app);
const AuthProvider = ({children}) => {
const[user,setUser]=useState()
const[loading,setLoading]=useState(true)
const googleProvider=new GoogleAuthProvider()
const createUser=(email,password)=>{
setLoading(true)
return createUserWithEmailAndPassword(auth,email,password)


}

useEffect(()=>{

    const unSubsCribe= onAuthStateChanged(auth,(user)=>{
        setUser(user)

        if(user){
            // get token send
        }
        else {
            // todo remove token
        }
    setLoading(false)
    console.log(user)
})

return ()=>{
     unSubsCribe();
}
},[])


const loginItem=(email,password)=>{

    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
 const googleWorkService=()=>{
setLoading(true)
 return signInWithPopup(auth,googleProvider)

 }

const myUpdateProfile=(name,photo)=>{

  return  updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo



      })

}


const logOutItem=()=>{
    setLoading(true)
    signOut(auth)
}
    const authInfo={
user,
loading,
createUser,
loginItem,
googleWorkService,
logOutItem,
myUpdateProfile,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;