import axios from "axios"
const host = "http://localhost:3001/"
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
            console.log(response);
        return {success: true, data: response.data}
    }catch(err: any){
        console.log(err.message)
        return {success: true, data: data}
    }

}