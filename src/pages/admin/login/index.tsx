import Congratulations from '@/components/admin/adminModal/Congratulations'
import Error from '@/components/admin/adminModal/Error'
import { loginAdmin } from '@/config/apiCalls'
import { useAuthContext } from '@/context/authContext'
import { useRouter } from 'next/router'
import React, {useState, useContext} from 'react'


type Props = {}

const Login = (props: Props) => {
    const router = useRouter();
    const {setAuthState } = useAuthContext()

    const [successNotification, setSuccessNotification] = useState<Boolean>(false)
    const [errorNotification, setErrorNotification] = useState<Boolean>(false)
    const [notification, setNotification] = useState<notify>()

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = async (e:any)=>{
        e.preventDefault();
        const response = await loginAdmin({email, password});
        if(response.success){
            setSuccessNotification(prev=>true);
            setAuthState({data: "admin"})
            router.push('/admin')
        }else{
            setErrorNotification(prev=>true);
            setAuthState({data: ""})
        }
        setNotification(response);
    }
    
  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <form 
        onSubmit={handleLogin} className="w-full">
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium text-gray-700 mb-2">Email</label>
        <input
        onChange={(e)=>setEmail(e.target.value)}
         
         type="email" id="email" name="email" className="form-input w-full" placeholder="Email address" required />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block font-medium text-gray-700 mb-2">Password</label>
        <input
        onChange={(e)=>setPassword(e.target.value)}
         type="password" id="password" name="password" className="form-input w-full" placeholder="Password" required />
      </div>
      <div className="mb-4">
        <button type="submit" className="bg-blue text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
      </div>
    </form>
  </div>
</div>

<Congratulations
                  lead={notification?.message} 
                  show={successNotification} 
                  sub={""}
                  onClose={()=>setSuccessNotification(false)}
                  />
      <Error
        lead={notification?.message} 
        sub={notification?.data?.data} 
        show={errorNotification} 
        onClose={()=>setErrorNotification(false)} />

    </div>
  )
}

export default Login