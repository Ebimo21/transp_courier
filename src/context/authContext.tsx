import React, {createContext, useState, useContext} from 'react'
const jscookie = require('jscookie');

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
    // authState: AuthState,
    // setAuthState: (userAuthInfo: userAuth) => void;
}

const userContext = createContext<Context | undefined>(undefined);

const AuthProvider = ({children}: Props) => {

    // const [authState, setAuthState] = useState<AuthState>({user: ""});

    // const setUserAuthInfo = ({ data }:userAuth) => {
    //     const user = localStorage.setItem("user", data);        
    //     setAuthState({user: data});
    // }

    // // checks if the user is authenticated or not
    // const isUserAuthenticated = () => {
    //     if (authState.user==="admin") return true;
    //     else return false;
    // };

    // const handleer = ():boolean =>{
    //     return true
    // }

    const isUserAuthenticated = () =>{
        const user = jscookie.get("user");
        if(user) return true;
        else return false;
    }

  return (
    <userContext.Provider value={{
        // authState,
        // setAuthState:(userAuthInfo:userAuth)=>handleer(),
        // setAuthState: (userAuthInfo:userAuth) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated,
        }}>
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