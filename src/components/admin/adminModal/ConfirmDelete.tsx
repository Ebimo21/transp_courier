import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

type Props = {
    lead: string,
    deleted: ()=>Promise<void>,
    show: Boolean,
    onClose: ()=>void,


}
function ConfirmDelete({lead, deleted, show, onClose} : Props) {
  if(!show) {return null}

  return (
    <div>
         <div className=' flex justify-center items-center fixed top-0 left-0 w-full h-screen z-20 bg-[rgba(0,0,0,0.4)] text-center'>
            <div className='w-[1000px] relative bg-[#fefefe] mx-auto rounded-lg my-[5%] m max-w-xs md:max-w-[500px] p-5 border-none outline-none'>
                <p className='font-bold mt-5'>{lead}</p>
                <div>
                    <img width={200} className="block mt-2 mx-auto"  src={"../images/binImage.png"} alt="" />
                </div>

                <div className=' flex justify-between items-center m-auto w-64 mt-5'>
                    <button onClick={onClose} className='p-2 border border-solid border-purple text-purple text-base w-24 h-30 rounded-md flex justify-center items-center gap-2 '>Cancel </button>
                    <button onClick={()=>deleted()} className='p-2 bg-altPurple text-blue border border-solid border-blue text-base w-24 h-30 rounded-md flex justify-center items-center gap-2 '>Delete <MdKeyboardArrowRight size="20px" /> </button>
                </div>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default ConfirmDelete
