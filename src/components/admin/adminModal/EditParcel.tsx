import React, { Dispatch, FormEvent, RefObject, useEffect, useState } from 'react';
import {getParcel} from "../../../config/apiCalls"
import moment from "moment";

type dispatchType ={
    type: string,
    payload: string,
}
type Props = {
    error: string | null,
    handleParcelUpdate: (e: FormEvent, func: (e:FormEvent)=>void)=>void,
    dispatch: ({type, payload}: dispatchType)=> void,
    parcelAction: parcelAction,
    id: string,
    formElement: RefObject<HTMLFormElement>,
    handleCallbackUpdate: (e:FormEvent)=>void,
    show: Boolean,
    onClose: ()=>void,
    state: Object,
    loading: boolean,
}



const EditParcel = ({state, loading, handleParcelUpdate, dispatch, error, parcelAction, id, formElement, handleCallbackUpdate, show, onClose}: Props) => {
  const [parcel, setParcel] = useState<newParcel>()

  const returnTime = (_t: string) =>{
    const time = moment.utc(_t).utcOffset(-4);
    return time.toISOString(true);
  }
    
    useEffect(()=>{
        const getParcelDetails = async() =>{
            const response = await getParcel(id) 
            setParcel(response.data[0])
        }
        console.log(id);

        getParcelDetails()
    },[id])
    useEffect(()=>{
        console.log(state);
    },[state])

    useEffect(()=>{
      console.log(state);
        const updateState =()=>{
          const el = formElement?.current?.elements as HTMLFormControlsCollection;
          //  ("count");
          
          for (let i = 0; i < el?.length; i++) {
            const control = el[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
            if (control !instanceof HTMLSelectElement) {
              // Use a type guard to determine whether the control is an HTMLSelectElement
              dispatch({ type: control?.name, payload: control?.value });
               (control.name);
              // formData[control.name] = control.defaultValue;
            } else {
               (control.name);
              // For all other controls, use the value property
              //  (control.defaultValue);
              dispatch({ type: control?.name, payload: control?.defaultValue });
              // formData[control.name] = control.value;
            }
          }
          

        
            // for(let i=0; i<el?.length; i++){
            //   const control = el[i] as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
            //   dispatch({ type: control.name, payload: control?.defaultValue });
            // }

                // dispatch({type: el[i]?.name, payload: el[i].defaultValue})
        }

        updateState()
    }, [parcel])
    
    if(!show) {return null}
  return (
    <>
    <div onClick={onClose} className=' fixed top-0 left-0 w-full h-screen flex items-center  z-20 bg-[rgba(0,0,0,0.4)] text-xs md:text-base '>
        <div 
            onClick={e => e.stopPropagation()}
            className='bg-[#fefefe] overflow-auto h-[50vh] mx-auto rounded-lg my-[1%] max-w-sm md:max-w-[700px] p-5 md:px-20 border-none outline-none'>
            <h3 className='font-bold  mb-2'>Edit offer</h3>
            {/* <p className='text-sm'>Enter the details on the offer you are creating below</p> */}

        <form onSubmit={(e)=>handleParcelUpdate(e, handleCallbackUpdate)} ref={formElement} className="max-w-2xl mr-auto">
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
                defaultValue={parcel?.Tracking_id}
                placeholder="Auto Generated"/>
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="vehicle_type">Status</label>
                <select
                  name='status'
                  id='status'
                  onChange={(e)=>dispatch({type: parcelAction.STATUS, payload: e.target.options[e.target.selectedIndex].value})} 
                  className="w-full px-3 py-2 border border-gray-400 rounded"
                  required
                  defaultValue={parcel?.status}
                >
                  <option selected={parcel?.vehicle_type == "Pending"}>Pending</option>
                  <option selected={parcel?.vehicle_type == "Waiting"}>Waiting</option>
                  <option selected={parcel?.vehicle_type == "Hold"}>Hold</option>
                  <option selected={parcel?.vehicle_type == "Transit"}>Transit</option>
                  <option selected={parcel?.vehicle_type == "Failure"}>Failure</option>

                </select>
              {/* <input 
                className="w-full px-3 py-2 border border-gray-400 rounded" type="text" id="vehicle_type" name="vehicle_type" placeholder="Enter Vehicle Type"/> */}
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
                defaultValue={parcel?.reciever_email}

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
                required
                defaultValue={parcel?.reciever_name}
                />
            </div>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="vehicle_type">Vehicle Type</label>
                <select
                  name='vehicle_type'
                  id='vehicle_type'
                  onChange={(e)=>dispatch({type: parcelAction.VEHICLE_TYPE, payload: e.target.options[e.target.selectedIndex].value})} 
                  className="w-full px-3 py-2 border border-gray-400 rounded"
                  required
                  defaultValue={parcel?.vehicle_type}
                >
                  <option defaultValue={parcel?.vehicle_type == "Air"? "Air": ""}>Air</option>
                  <option defaultValue={parcel?.vehicle_type == "Ship"? "Ship": ""}>Ship</option>
                  <option defaultValue={parcel?.vehicle_type == "Bus"? "Bus": ""}>Bus</option>

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
                required
                defaultValue={parcel?.destination}
                />
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
                defaultValue={parcel?.reciever_address}

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
                defaultValue={parcel?.reciever_phone}
                required/>
            </div>
            </div>
          <div className=' my-5'>
            <div>
              <label 
                className="block mb-2 font-bold" 
                htmlFor="reciever_phone">Description</label>
                <textarea
                  name='description'
                  id='description'
                  defaultValue={parcel?.description}
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
                defaultValue={parcel?.route}
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
                defaultValue={parcel?.sender_name}
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
                id="delivery_date" 
                name="delivery_date" 
                required
                defaultValue={returnTime(parcel? parcel?.delivery_date : "")?.toString()?.slice(0, -6)?.replace(/[T]/, " ")}
                />
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
                required
                defaultValue={parcel?.current_location}
                />
            </div>
          
            <p className='text-red-400 text-base'>{error !== null? error: ""}</p>

              </div>
              <button  className={`bg-blue text-white px-3 py-2 mt-4 btn ${loading? "loading": ""}`} defaultValue={"submit"}>Submit</button>
        </form>
        </div>
    </div>
    </>
  )
}

export default EditParcel