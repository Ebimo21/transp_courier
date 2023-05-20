import { loginAdmin } from "@/config/apiCalls";
import { useRouter } from "next/router";
import { useState } from "react";

const emailRegex = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+[a-zA-Z]{1}\.[a-zA-Z]+$/;

const useHandleLogin = () => {
    const router = useRouter();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError ] = useState<string | null>(null);
    const [successNotification, setSuccessNotification] = useState<Boolean>(false)
    const [errorNotification, setErrorNotification] = useState<Boolean>(false)
    const [notification, setNotification] = useState<notify>()

    const handleLogin = async (e:any)=>{
    
        e.preventDefault();
        
        let regRes
          if(regRes = !emailRegex.test(email)){
            setError("Invalid Email!");
            setTimeout(() => {
              setError(null)
            }, 2000)
    
    
    
    
          } else if (password.length < 6 ) {
            setError("Password too short! ! Min: 6");
            setTimeout(() => {
              setError(null)
            }, 2000)
    
          }
          else{
    
            const response = await loginAdmin({email, password});
            if(response.success){
                setSuccessNotification(prev=>true);
                setTimeout(()=>{
                  router.push('/admin')
                  
                }, 3000)
            }else{
                setErrorNotification(prev=>true);
            }
            setNotification(response);
    
          }
    
        }
        return { handleLogin, notification, setNotification, email, setEmail, password, setPassword, error, setError, successNotification, setSuccessNotification, errorNotification, setErrorNotification}
}

  export default  useHandleLogin