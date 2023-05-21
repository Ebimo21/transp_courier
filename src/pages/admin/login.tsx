import Congratulations from '@/components/admin/adminModal/Congratulations'
import Error from '@/components/admin/adminModal/Error'
import { loginAdmin } from '@/config/apiCalls'
import useHandleLogin from '@/hooks/useLogin'
import { useRouter } from 'next/router'
import React, {useState, useContext} from 'react'


type Props = {}

const Login = (props: Props) => {

  const {email, loginLoading:loading, setEmail, setError, error, errorNotification, setErrorNotification, successNotification, setSuccessNotification, password, setPassword, handleLogin, notification} = useHandleLogin()

  return (
    <div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-6">
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Login</h2>
    <p className='text-red-400 text-xs'>{error !== null? error: ""}</p>
      <form onSubmit={handleLogin} className="w-full">
        <div className="form-control">
          <div>
            <label htmlFor='email' className="label">
              <span className="label-text">Your Email</span>
            </label>
            <label className="input-group">
              <span>Email</span>
              <input 
                onChange={(e)=>setEmail(e.target.value)} 
                type="text"
                id="email" 
                placeholder="info@site.com" 
                className="w-full input input-bordered"
                 />
            </label>
          </div>
 
          <div>
            <label htmlFor='password' className="label">
              <span className="label-text">Your Password</span>
            </label>
            <label className="input-group">
              <span>Password</span>
              <input 
                onChange={(e)=>setPassword(e.target.value)}
                type="password" 
                id="password" 
                placeholder="info@site.com" 
                className="w-full input input-bordered" 
                required
                />
            </label>
          </div>
        </div>
        <div className='my-4'>
          <button className={`btn ${loading? 'loading': ''}`}>Login</button>
        </div>
      </form>
    {/* <form 
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
    </form> */}
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