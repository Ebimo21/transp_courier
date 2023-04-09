import ConfirmDelete from '@/components/admin/adminModal/ConfirmDelete';
import Congratulations from '@/components/admin/adminModal/Congratulations';
import EditParcel from '@/components/admin/adminModal/EditParcel';
import Error from '@/components/admin/adminModal/Error';
import { Add } from '@/components/iconify/Add';
import Delete from '@/components/iconify/Delete';
import EditBox from '@/components/iconify/EditBox';
import Layout from '@/components/layout/admin/Layout';
import LayoutNew from '@/components/layout/admin/LayoutNew';
import { deleteParcelDetails, getAllParcels, updateParcelDetails } from '@/config/apiCalls';
import { useAuthContext } from '@/context/authContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, {FormEvent, RefObject, useEffect, useReducer, useRef, useState} from 'react';

type Props = {};

const Index = (props: Props) => {
  const { isUserAuthenticated } = useAuthContext();
  const router = useRouter();

  React.useEffect(() => {
    console.log(isUserAuthenticated());
    // checks if the user is authenticated
    !isUserAuthenticated()
    ? router.push("/admin/login"): ""
  }, []);

  const formEl: RefObject<HTMLFormElement> = useRef(null);
  const [refresh, setRefresh] = useState<Boolean>(false);
  const [itemToDelete, setItemToDelete] = useState<string | null>(null);
  const [deleteModal, setDeleteModal] = useState<Boolean>(false);

  const [parcels, setParcels] = useState<newParcel[]>();
  const [editParcelModal, setEditParcelModal] = useState(false);
  const [parcelId, setParcelId] = useState<string>("")


  const [successNotification, setSuccessNotification] = useState<Boolean>(false)
    const [errorNotification, setErrorNotification] = useState<Boolean>(false)
    const [notification, setNotification] = useState<notify>()

  const handleParcelUpdate = (e: FormEvent, callback: (e:FormEvent)=>void)=>{
    e.preventDefault();
    callback(e);
}

const handleCallbackUpdate = async(e: FormEvent) =>{
  // console.log(parcelEdit);
  const response:notify = await updateParcelDetails(parcelId, parcelEdit);

  // console.log(response);
   if(response.success){
       setSuccessNotification(prev=>true);
   }else{
       setErrorNotification(prev=>true);
   }
   setNotification(response);
   setEditParcelModal(false);
   dispatch({type: parcelAction.CLEAR});

   setRefresh(prev=>!prev)

} 

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
  STATUS: "status",
  CLEAR: "clear",
}

const reducer = (state:any, action:any) =>{
  const {type, payload} = action;
  // console.log(state);
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
      return {...state, current_location: payload};
    case parcelAction.STATUS: 
      return {...state, status: payload};
    case parcelAction.CLEAR:
      return {...state, ...initial}
    default:
      return state;
  }
  
}

const initial:newParcel ={
  reciever_email: "",
  status: "",
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

const handleDelete = async():Promise<void> =>{
  setDeleteModal(false);
  const response = await deleteParcelDetails(itemToDelete);
  console.log(response);
  if(response.success){
    setSuccessNotification(prev=>true);
}else{
    setErrorNotification(prev=>true);
}
setNotification(response);
setEditParcelModal(false);
dispatch({type: parcelAction.CLEAR});

setRefresh(prev=>!prev)

}

const [parcelEdit, dispatch] = useReducer(reducer, initial)


  useEffect(()=>{
    const getParcels = async () =>{
      const response = await getAllParcels(1);
      setParcels(response.data);
    }
    getParcels();
  }, [refresh]);
  return (
      <LayoutNew>
        <div>
          <div className=''>
            <span>Parcels</span>
            <div><Add/></div>
          </div>
        <div className='overflow-auto text-left shadow  whitespace-nowrap'>
          <table className='overflow-auto max-w-[200px]'>
            <thead>
              <tr className=' bg-[#e1dddd] text-slate-500 '>
                <th className='w-10 p-3'>S/N</th>
                <th className='w-20 p-3'>Tracking ID</th>
                <th className='w-20 p-3'>Status</th>
                <th className='w-20 p-3'>Current Location</th>
                <th className='w-20 p-3'>Reciever Name</th>
                <th className='w-20 p-3'>Destination</th>
                <th className='w-20 p-3'>Reciever Phone</th>
                <th className='w-20 p-3 whitespace-nowraps'>Vehicle Type</th>
                <th className='w-20 p-3'>Reciever Address</th>
                <th className='w-20 p-3'>Reciever Email</th>
                <th className='w-20 p-3'>Sender Name</th>
                <th className='w-20 p-3'>Route</th>
                <th className='w-20 p-3'>Description</th>
                <th className='w-20 p-3'>Delivery Date</th>
                <th className='w-20 p-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {parcels?.map((item, index)=>{
                return (
                  <tr
                    className={`p-2 ${index % 2 === 0 ? "bg-slate-200": "bg-slate-100" } `}
                    key={index}>
                    <td className='p-3 w-10'>{index + 1}</td>
                    <td className='p-3 w-20'><Link href={`/admin/parcel/${item?.Tracking_id}`}><span>{item?.Tracking_id}</span></Link></td>
                    <td className='p-3 w-20'>{item?.status}</td>
                    <td className='p-3 w-20'>{item?.current_location}</td>
                    <td className='p-3 w-20'>{item?.reciever_name}</td>
                    <td className='p-3 w-20'>{item?.destination}</td>
                    <td className='p-3 w-20'>{item?.reciever_phone}</td>
                    <td className='p-3 w-20 whitespace-nowrap'>{item?.vehicle_type}</td>
                    <td className='p-3 w-20'>{item?.reciever_address}</td>
                    <td className='p-3 w-20'>{item?.reciever_email}</td>
                    <td className='p-3 w-20'>{item?.sender_name}</td>
                    <td className='p-3 w-20'>{item?.route}</td>
                    <td className='p-3 w-20'>{item?.description}</td>
                    <td className='p-3 w-20'>{item?.delivery_date}</td>
                    <td className='p-3 w-20 flex items-center gap-2'> 
                      <span 
                        onClick={(e)=>{setEditParcelModal(prev=> !prev); setParcelId(item?.Tracking_id ?? ""); console.log(parcelId);}} >
                          <EditBox fill='#1f29e1' />
                          </span>

                      <span onClick={()=>{setItemToDelete(item?.Tracking_id ?? null); setDeleteModal(prev=>!prev)}}><Delete fill="#eb3c3c"/></span>
                      </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {editParcelModal && <EditParcel 
          handleParcelUpdate={handleParcelUpdate}
          handleCallbackUpdate={handleCallbackUpdate}
          dispatch={dispatch}
          parcelAction={parcelAction}
          id={parcelId}
          formElement={formEl}
          // formElement={formEl}
          show={editParcelModal}
          state={parcelEdit}
          onClose={()=>setEditParcelModal(prev =>!prev)} />
          }

          {deleteModal && <ConfirmDelete show={deleteModal} onClose={()=>setDeleteModal(false)} lead='Confirm Delete' deleted={handleDelete} />}

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
      </LayoutNew>

      
  )
}

export default Index