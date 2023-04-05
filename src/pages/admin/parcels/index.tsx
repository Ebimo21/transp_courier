import Layout from '@/components/layout/admin/Layout';
import { getAllParcels } from '@/config/apiCalls';
import React, {useEffect, useState} from 'react';

type Props = {};

const Index = (props: Props) => {
  const [parcels, setParcels] = useState<newParcel[]>();

  useEffect(()=>{
    const getParcels = async () =>{
      const response = await getAllParcels(2);
      console.log(response.data[0]);
      setParcels(response.data);
    }
    getParcels();
  }, []);
  return (
    <Layout title='Parcels'>
        <div>index</div>

        {parcels?.map((item, index)=> <span key={index}>{item?.id}</span>)}
      </Layout>
  )
}

export default Index