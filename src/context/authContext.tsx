import React, {createContext, useState, useContext} from 'react'

type Props = {
    children: React.ReactNode;
};
type userAuth = {
    data: string,
}
type AuthState = {
    user: string | void
}
type Context = {
    isUserAuthenticated: ()=>boolean,
    authState: AuthState,
    setAuthState: (userAuthInfo: userAuth) => void;
}

const userContext = createContext<Context | undefined>(undefined);

const AuthProvider = ({children}: Props) => {
    const [authState, setAuthState] = useState<AuthState>({user: ""});

    const setUserAuthInfo = ({ data }:userAuth) => {
        const user = localStorage.setItem("user", data);        
        setAuthState({user: data});
    }

    // checks if the user is authenticated or not
    const isUserAuthenticated = () => {
        console.log(authState.user);
        console.log(authState.user === "admin");
        if (authState.user==="admin") return true;
        else return false;
    };

  return (
    <userContext.Provider value={{
        authState,
        setAuthState: (userAuthInfo:userAuth) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,}}>
        {children}
    </userContext.Provider>
  )

}
const useAuthContext = () =>{
    const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
}

export {AuthProvider, useAuthContext}

// import React from 'react'
// import { useContext } from 'react';
// import { useState } from 'react';
// import { createContext } from 'react';

// type Props = {
//     children: React.ReactNode;
// };
// type userAuth = {
//     data: string,
// }
// type AuthState = {
//     user: string | void
// }

// type cont ={
    // isUserAuthenticated: ()=>boolean,
    // authState: AuthState,
    // update: ()=>void,
    // setAuthState?: React.Dispatch<React.SetStateAction<AuthState>>
    // setAuthState: (userAuthInfo: userAuth) => void;

// }

// const AuthContext = createContext<cont>({
//     isUserAuthenticated: ()=>false,
//     authState: {user: ""},
//     setAuthState: () => {},
//     update: ()=>console.log()

// });
// const {Provider} = AuthContext;

// const AuthProvider = ({children}: Props) => {
//     const [authState, setAuthState] = useState<AuthState>({
//         user: "",
//        });
     
//        const setUserAuthInfo = ({ data }:userAuth) => {
//         const user = localStorage.setItem("user", data);
//         console.log("done");
     
//         setAuthState({
//          user
//         });

//         const update = ()=>{
//             console.log("updated");
//         }

//         // checks if the user is authenticated or not
//         const isUserAuthenticated = () => {
//             if (authState.user!=="Admin") {
//                 console.log(authState.user);
//             return false;
//             }else{
//                 return true
//             }
//         };
//   return (
//     <Provider
//      value={{
//         update,
//       authState,
//       setAuthState: (userAuthInfo:userAuth) => setUserAuthInfo(userAuthInfo),
//       isUserAuthenticated,
//     }}
//    >
//     {children}
//    </Provider>
//   )
// }
// }

// // export const useAuthContext =() =>{
// //     return useContext(AuthContext)
// // }

// export  {AuthProvider, AuthContext}