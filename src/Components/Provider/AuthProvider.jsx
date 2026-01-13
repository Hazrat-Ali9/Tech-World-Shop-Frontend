import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/Firebase.config';






export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
   const auth = getAuth(app)
    const [dark,setDark] = useState(true)
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const creatUser = (email,password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
   } 

   const OUT = ()=>{
      setLoading(true)
      return signOut(auth)
   }

   useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{

          setUser(currentUser)
          setLoading(false)
          console.log('Ovserving',currentUser)
      })
      return ()=>{
          unsubscribe()
      }
   },[])

   const Google = ()=>{
      const provider = new GoogleAuthProvider()
      setLoading(true)
      return signInWithPopup(auth,provider)
   }

   const update = (name,photo)=>{
      setLoading(true)
     return updateProfile(auth.currentUser,{
      displayName:name,photoURL:photo
      })
  }

  const In = (email,password)=>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
  }

    const AuthInfo = { dark , setDark, loading ,user, In, update , Google , OUT ,  creatUser }
    // const AuthInfo = {dark,setDark}
   
    return (
        <AuthContext.Provider value={AuthInfo}>
           {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;