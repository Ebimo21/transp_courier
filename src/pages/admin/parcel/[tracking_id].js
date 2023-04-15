import { useRouter } from "next/router";
import {getParcel} from "../../../config/apiCalls"
import { useEffect, useState } from "react";
import { useAuthContext } from '@/context/authContext';


const Parcel = () =>{

    const router = useRouter();
    const {tracking_id} = router.query;
    const isReady = router.isReady;
    console.log(tracking_id);
    const [parcel, setParcel] = useState()


    const {isUserAuthenticated} = useAuthContext()

    useEffect(() => {
      console.log(isUserAuthenticated());
      !isUserAuthenticated()
      ? router.push("/admin/login"): ""
    }, []);

    useEffect(() => {
        async function getSingleParcel(){
            
          const response = await getParcel(tracking_id)
          setParcel(response.data[0])
        }
          if(isReady){
            getSingleParcel()
          }
        }, [tracking_id])

        return(
            <>
                <h2>{parcel?.status}</h2>
                <p>Hello</p>
            </>
        )
}

export default Parcel