import React, { useReducer, FormEvent, RefObject, useEffect, useState } from 'react';
import {addNewParcel, getParcel} from "../../../config/apiCalls"

type dispatchType ={
    type: string,
    payload: string,
}
type Props = {
    show: Boolean,
    onClose: ()=>void,    
    reload: ()=>void,    
}



const AddParcel = ({show, onClose, reload}: Props) => {
  const [parcel, setParcel] = useState<newParcel>();

  const parcelAction =  {
    RECIEVER_EMAIL: "reciever_email",
    RECIEVER_NAME: "reciever_name",
    VEHICLE_TYPE: "vehicle_type",
    DESTINATION: "destination",
    RECIEVER_ADDRESS: "reciever_address",
    RECIEVER_PHONE: "reiever_phone",
    DESCRIPTION: "description",
    ROUTE: "route",
    SENDER_NAME: "sender_name",
    DELIVERY_DATE: "delivery_date",
    CURRENT_LOCATION: "current_location",
  }

    const initial:newParcel ={
        reciever_email: "",
        reciever_name: "",
        vehicle_type: "",
        destination: "",
        reciever_address: "",
        reciever_phone: 0,
        description: "",
        route: 0,
        sender_name: "",
        delivery_date: "",
        current_location: "",
      }
    
      const reducer = (state:any, action:any) =>{
        const {type, payload} = action;
        switch(type){
          case parcelAction.RECIEVER_EMAIL:
            return {...state, reciever_email: payload};
          case parcelAction.RECIEVER_NAME:
            return {...state, reciever_name: payload};
          case parcelAction.VEHICLE_TYPE:
            return {...state, vehicle_type: payload};
          case parcelAction.DESTINATION:
            return {...state, destination: payload};
          case parcelAction.RECIEVER_ADDRESS:
            return {...state, reciever_address: payload};
          case parcelAction.RECIEVER_PHONE:
            return {...state, reciever_phone: payload};
          case parcelAction.DESCRIPTION:
            return {...state, description: payload};
          case parcelAction.ROUTE:
            return {...state, route: payload}
          case parcelAction.SENDER_NAME:
            return {...state, sender_name: payload};
          case parcelAction.DELIVERY_DATE:
            return {...state, delivery_date: payload};
          case parcelAction.CURRENT_LOCATION:
            return {...state, current_location: payload}
          default:
            return state;
        }
        
      }

  const [newParcel, dispatch] = useReducer(reducer, initial)


    const handleNewParcel = async(e: any)=>{
        e.preventDefault()
        await addNewParcel(newParcel);
        reload()
        onClose();
      }
    
    if(!show) {return null}
  return (
    <>
    <div onClick={onClose} className=' fixed top-0 left-0 w-full h-screen flex items-center  z-20 bg-[rgba(0,0,0,0.4)] text-xs md:text-base '>
        <div 
            onClick={e => e.stopPropagation()}
            className='bg-[#fefefe] overflow-auto h-[50vh] mx-auto rounded-lg my-[1%] max-w-sm md:max-w-[700px] p-5 md:px-20 border-none outline-none'>
            <h3 className='font-bold  mb-2'>Add offer</h3>
            {/* <p className='text-sm'>Enter the details on the offer you are creating below</p> */}

            <form onSubmit={handleNewParcel} className="max-w-2xl mr-auto">
          <div className="grid md:grid-cols-2 gap-4 ">
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="tracking_id">Tracking ID</label>
              <input
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="tracking_id" 
                name="tracking_id"
                disabled
                placeholder="Auto Generated"/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="reciever_email">Receiver Email</label>
              <input 
                onChange={(e)=>dispatch({type: parcelAction.RECIEVER_EMAIL, payload: e.target.value})} 
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="email" 
                id="reciever_email" 
                name="reciever_email" 
                placeholder="Enter Receiver Email"
                required/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="reciever_name">Receiver Name</label>
              <input 
                onChange={(e)=>dispatch({type: parcelAction.RECIEVER_NAME, payload: e.target.value})} 
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="reciever_name" 
                name="reciever_name" 
                placeholder="Enter Receiver Name"
                minLength={3}
                maxLength={50}
                required/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="vehicle_type">Vehicle Type</label>
                <select
                  onChange={(e)=>dispatch({type: parcelAction.VEHICLE_TYPE, payload: e.target.options[e.target.selectedIndex].value})} 
                  className="w-full px-3 py-2 border border-gray-400 rounded"
                  required>
                  <option>Air</option>
                  <option>Ship</option>
                  <option selected>Bus</option>
                </select>
              {/* <input 
                className="w-full px-3 py-2 border border-gray-400 rounded" type="text" id="vehicle_type" name="vehicle_type" placeholder="Enter Vehicle Type"/> */}
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="destination">Destination</label>
              <input 
                onChange={(e)=>dispatch({type: parcelAction.DESTINATION, payload: e.target.value})} 
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="destination" 
                name="destination" 
                placeholder="Enter Destination"
                required/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="reciever_address">Receiver Address</label>
              <input 
                onChange={(e)=>dispatch({type: parcelAction.RECIEVER_ADDRESS, payload: e.target.value})} 
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="reciever_address" 
                name="reciever_address" 
                placeholder="Enter Receiver Address"
                required/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="reciever_phone">Receiver Phone</label>
              <input
                onChange={(e)=>dispatch({type: parcelAction.RECIEVER_PHONE, payload: e.target.value})}  
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="tel" 
                id="reciever_phone" 
                name="reciever_phone" 
                placeholder="Enter Receiver Phone"
                required/>
            </div>
            </div>
          <div className=' my-5'>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="reciever_phone">Description</label>
                <textarea
                  className='w-full px-3 py-2 border border-gray-400 rounded'
                  onChange={(e)=>dispatch({type: parcelAction.DESCRIPTION, payload: e.target.value})} 
                  cols={40} rows={10}>

                </textarea>
            </div>
          </div> 
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="route">Route</label>
              <input 
                onChange={(e)=>dispatch({type: parcelAction.ROUTE, payload: e.target.value})} 
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="route" 
                name="route" 
                placeholder="Enter Route"
                required/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="route">Sender Name</label>
              <input
                onChange={(e)=>dispatch({type: parcelAction.SENDER_NAME, payload: e.target.value})}  
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="sender_name" 
                name="sender_name" 
                placeholder="Enter Sender Name"
                required/>
            </div>
            
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="route">Delivery Date</label>
              <input 
                onChange={(e)=>dispatch({type: parcelAction.DELIVERY_DATE, payload: e.target.value})} 
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="datetime-local" 
                id="sender_name" 
                name="sender_name" 
                required/>
            </div>

            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="route">Current Location</label>
              <input
                onChange={(e)=>dispatch({type: parcelAction.CURRENT_LOCATION, payload: e.target.value})}  
                className="w-full px-3 py-2 border border-gray-400 rounded" 
                type="text" 
                id="current_location" 
                name="current_location" 
                placeholder="Enter Parcel Location"
                required/>
            </div>
              </div>
              <button className='bg-blue text-white px-3 py-2 mt-4'>Submit</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default AddParcel