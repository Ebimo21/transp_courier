import { getParcel } from '@/config/apiCalls'
import { serverUTCDiff, userUTCDiff } from '@/config/timezone';
import moment from 'moment';
import React, { useState } from 'react'
// import Toastify from 'toastify-js';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css"

function Track() {
    interface Parcel {
        tracking_id: string
        setTracking_Id: any
    }
    const parcelInitial = [
        {
            id: null,
            Tracking_id: null,
            status: null,
            reciever_email: null,
            reciever_name: null,
            vehicle_type: null,
            destination: null,
            reciever_address: null,
            reciever_phone: null,
            route: null,
            description: null,
            created_at: null,
            updated_at: null,
            completed_at: null,
            sender_name: null,
            delivery_date: null,
            current_location: null,
        }
    ];
    const [parcel, setParcel] = useState(parcelInitial);
    const [tracking_id, setTracking_Id] = useState("");
    
    const handleTrackParcel = async(e:any)=>{
        e.preventDefault()
        const response = await getParcel(tracking_id);
        setParcel(response?.data)
        console.log(response);

        if(!response.success){
            Toastify({
                text: response?.message,
                duration: 3000,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "right", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
              }).showToast();
            }
    }

    const returnTime = (_t: string | null, _serverUTCDiff: number = serverUTCDiff) =>{
        const time = moment.utc(_t).utcOffset(_serverUTCDiff);
        return time.format();
      }

  return (
        <div>
        <div className='py-5 px-10 md:py-10 md:px-20'>
            
            <p className='text-3xl text-blue font-bold'>Track Your Parcel</p>
        </div>

        <div className='bg-[#c2d7f3] py-10 px-5 md:py-10 md:px-20 mb-0'>
            <p className='text-[#30363f]'>
                Know where your parcel is and also get notified 
                when package is ready for pickup / delivery
            </p>

            <form onSubmit={handleTrackParcel} className='flex justify-between overflow-hidden mt-5  w-full rounded-full bg-white'>
                <input
                    onChange={(e)=>setTracking_Id(e.target.value)}
                    name='tracking'
                    type='text'
                    className='bg-transparent basis-7/12 outline-none pl-4'
                    placeholder='Enter Parcel Tracking Number' />

                <button className='bg-yellow basis-3/12 lg:basis-3/12 p-4 px-8 rounded-full font-bold text-blue'>Track</button>
            </form>
        </div>

           {parcel?.length< 1 && parcel[0]?.id !== null && (<p className='text-center'>Parcel not found</p>)}
           {parcel?.length> 0 && parcel[0]?.id !== null && 
           (
               <div className='md:p-10'>
            <div className='overflow-y-autos m-auto '>
                <table className='w-screen max-w-5xl font-medium text-left text-sm text-slate-500 '>
                    <thead>
                        <tr className='p-2 bg-[#F1F1F1] text-slate-700'>
                            <th className=' p-4 '>Name</th>
                            <th className=' p-4  '>Discount Amount</th>
                        </tr>
                    </thead>
                    {parcel?.map((item, index)=>{
                        return(
                            <tbody key={item?.id}>
                                <tr>
                                    <td className='text-left  p-4 border-b border-b-slate-200  border-b-solid'>
                                        <span>Tracking ID</span>
                                    </td>
                                    <td className='text-left  p-4 border-b border-b-slate-200  border-b-solid'>
                                        <span>{item?.Tracking_id}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Status</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.status}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Receiver Email</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.reciever_email}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Reciever Name</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.reciever_name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Vehicle Type</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.vehicle_type}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Destination</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.destination}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Reciever Address</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.reciever_address}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Receiver Phone</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.reciever_phone}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Route</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.route}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Description</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.description}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Created At</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{returnTime(item?.created_at)?.slice(0, -9)?.replace(/[T]/, " ")}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Last Updated</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{returnTime(item?.updated_at)?.slice(0, -9)?.replace(/[T]/, " ")}</span>
                                        {/* <span>{item?.updated_at}</span> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Completed At</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.completed_at}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Sender Name</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.sender_name}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Delivery Date</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{returnTime(item?.delivery_date, userUTCDiff)?.slice(0, -9)?.replace(/[T]/, " ")}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>Current Location</span>
                                    </td>
                                    <td className=' p-4 border-b border-b-slate-200  border-b-solid '>
                                        <span>{item?.current_location}</span>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>   
            </div>
        </div>
           )
            }
    </div>
  )
}

export default Track
