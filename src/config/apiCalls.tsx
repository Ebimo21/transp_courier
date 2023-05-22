import axios from "axios";
const jscookie = require("jscookie");
const host = "https://node.tradefactory.net/";
// const host = "http://localhost:3001/";

type loginDetails = {
    email: string,
    password: string,
}

const data = [
    {
      "id": 9,
      "Tracking_id": "f4JcaX240",
      "status": "Waiting",
      "reciever_email": "updated_email@test.com",
      "reciever_name": "updated_name",
      "vehicle_type": "Bus",
      "destination": "Yenaga",
      "reciever_address": "Azikoro",
      "reciever_phone": "9022281319",
      "route": "3",
      "description": "parcel_description",
      "created_at": "2023-04-01T07:42:46.000Z",
      "updated_at": "2023-04-01T08:11:56.000Z",
      "completed_at": null,
      "sender_name": "s_name",
      "delivery_date": "2023-04-01T08:11:56.000Z",
      "current_location": "Abuja"
    }]

export const getParcel = async(id:string)=>{

    try {
        const response = await axios.get(
            `${host}parcel/track`,
            { 
                params: {
                    tracking_id: id
                }
            }
            )
        return {success: true, data: response.data}
    }catch(err: any){
        return {success: false, message: err.message}
    }

}

export const deleteParcelDetails = async (tracking_id:string|undefined|null)=>{
    try {
        const response = await axios.delete(
            `${host}parcel/track/${tracking_id}/delete`,
            
        )
        console.log(response);
        console.log(response.data);
        return {success: true, message: response.data.message}
    }catch(err:any){
        console.log(err.message);
        return {success: false, message: err.message};

    }
}

export const sendMail = async (email:string, subject:string, body:string, user:string)=>{
    try {
        const response = await axios.post(
            `${host}send/mail`,
            { data: {
                email, subject, body, user,
            }}
        )
        return {success: true, message: response.data.message};
    }catch(err:any) {
        return {success: false, message: err.message}
    }
}

export const loginAdmin = async ({email, password}:loginDetails)=>{
    try {
        const response = await axios.post(
            `${host}login`,
            {
                data: {email, password}
            },
            
        )

        jscookie.set({
            name: "user",
            value: "ADMIN",
        })
        
        return response.data
    }catch(err:any){
        console.log(err.message);
        return {success: false, message: err.message};

    }
}
export const updateParcelDetails = async (tracking_id:string, data:newParcel)=>{
    try {
        const response = await axios.put(
            `${host}parcel/track/${tracking_id}/update`,
            {
                data
            }
        )
        console.log(response);
        console.log(response.data);
        return {success: true, data: response.data}
    }catch(err:any){
        console.log(err.message);
        return {success: false, message: err.message};

    }
}


export const addNewParcel = async(formdata:newParcel)=>{
    try {
        const response = await axios.post(
            `${host}parcel`,
            {
                formdata
            },
            {

            },
        )

        console.log(response);
        return {success: true, data: response.data}
    }catch(err:any){
        console.log(err.message)
        return {success: false, message: err.message}
    }

}

export const getAllParcels = async (page:number=1, size:number=10) =>{
    try {
        const response = await axios.get(
            `${host}parcels`,
            {
                params: {
                    page, size
                }
            },
        )
        console.log(response);
        return {success: true, data: response.data}
    }catch(err: any){
        console.log(err.message);
        return {success: false}
    }
}