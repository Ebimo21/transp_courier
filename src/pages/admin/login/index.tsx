import Layout from '@/components/layout/admin/Layout'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <Layout title='Home'>
      <div className='md:ml-20 mb-20 p-4'>
      <form className="max-w-2xl mr-auto">
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
        <textarea cols={40} rows={10}>

        </textarea>
    </div>
  </div> 
  <div className="grid grid-cols-2 gap-4">
    <div>
      <label 
        className="block mb-2 font-bold" 
        htmlFor="route">Route</label>
      <input 
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
        className="w-full px-3 py-2 border border-gray-400 rounded" 
        type="text" 
        id="sender_name" 
        name="sender_name" 
        required/>
    </div>
    <div>
      <label 
        className="block mb-2 font-bold" 
        htmlFor="route">Delivery Date</label>
      <input 
        className="w-full px-3 py-2 border border-gray-400 rounded" 
        type="datetime-local" 
        id="delivery_date" 
        name="delivery_date" 
        required/>
    </div>
      </div>
    </form>
      </div>
    </Layout>
  )
}

export default index