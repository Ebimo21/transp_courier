interface newParcel {
    id?:string
    Tracking_id?: string,
    status?:string,
    current_location: string,
    reciever_name: string,
    destination: string,
    reciever_phone: number,
    vehicle_type: string,
    reciever_address: string,
    reciever_email: string,
    sender_name: string,
    route: number,
    description: string,
    delivery_date: string,
}

type svg = {
  width: number,
  height: number,
  fill?: string
}

type notify ={
    message?: string,
    success: Boolean,
    data?: {
      data?: {
        message: string
      }[] | undefined,
      // data?: any[]|undefined,
    }
  }

interface parcelAction {
    RECIEVER_EMAIL: string;
    RECIEVER_NAME: string;
    STATUS: string,
    VEHICLE_TYPE: string;
    DESTINATION: string;
    RECIEVER_ADDRESS: string;
    RECIEVER_PHONE: string;
    DESCRIPTION: string;
    ROUTE: string;
    SENDER_NAME: string;
    DELIVERY_DATE: string;
    CURRENT_LOCATION: string;
}