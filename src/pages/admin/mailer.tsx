import Congratulations from '@/components/admin/adminModal/Congratulations';
import Error from '@/components/admin/adminModal/Error';
import LayoutNew from '@/components/layout/admin/LayoutNew'
import { sendMail } from '@/config/apiCalls';
import { useAuthContext } from '@/context/authContext';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, {useState} from 'react'


type Props = {}

const QuillNoSSRWrapper = dynamic(import('react-quill'), {	
    ssr: false,
    loading: () => <p>Loading ...</p>,
    })
const Mailer = (props: Props) => {

      const router = useRouter();


    const [successNotification, setSuccessNotification] = useState<Boolean>(false);
    const [errorNotification, setErrorNotification] = useState<Boolean>(false);
    const [notification, setNotification] = useState<notify>();
    const [sendTO, setSendTO] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    const handleSendMail = async(e:any) =>{
        e.preventDefault();
        const response = await sendMail(sendTO, subject, message, username, title);
        setNotification(response);
        if(response.success){
            setSuccessNotification(prev=>true);
        }else{
            setErrorNotification(prev=>true);
        }
    }


  const {isUserAuthenticated} = useAuthContext()


    React.useEffect(() => {
        !isUserAuthenticated()
        ? router.push("/admin/login"): ""
      }, []);
  return (
    <LayoutNew>
        <div className='p-3'>
            <h2 className='font-medium text-xl'>Send Email </h2>
            <form 
                onSubmit={handleSendMail} 
                className="borderss  shadow-inner border-solid border-blue rounded-lg p-3 mt-4 del:max-w-2xl del:mr-auto">
                <div 
                    className="grid md:grid-cols-2 gap-4 ">
                    <div>
                        <label 
                            className="block mb-1  " 
                            htmlFor="email">Send To</label>
                        <input
                            onChange={(e)=>setSendTO(e.target.value)}
                            className="w-full p-3 outline-none  shadow rounded" 
                            type="email" 
                            id="email" 
                            name="email"
                            placeholder="Reciever Email"/>
                    </div>
                    <div>
                        <label 
                            className="block mb-1" 
                            htmlFor="subject">Subject</label>
                        <input 
                            onChange={(e)=>setSubject(e.target.value)}
                            className="w-full p-3 outline-none  shadow rounded" 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            placeholder="Enter Email Subject"
                            required/>
                    </div>
                    <div>
                        <label 
                            className="block mb-1" 
                            htmlFor="title">Title</label>
                        <input 
                            onChange={(e)=>setTitle(e.target.value)}
                            className="w-full p-3 outline-none  shadow rounded" 
                            type="text" 
                            id="title" 
                            name="title" 
                            placeholder="Enter Email Title"
                            required/>
                    </div>
                    <div>
                        <label 
                            className="block mb-1" 
                            htmlFor="username">User Name</label>
                        <input 
                            onChange={(e)=>setUsername(e.target.value)}
                            className="w-full p-3 outline-none  shadow  rounded" 
                            type="text" 
                            id="username" 
                            name="username" 
                            placeholder="Enter User Name"
                            minLength={3}
                            maxLength={50}
                            required/>
                    </div>
                </div>
                <div className=' my-5'>
                    <div className='block '>
                        <QuillNoSSRWrapper className='w-full outline-none  shadow rounded overflow-auto max-h-80' theme="snow" modules={modules} formats={formats} value={message} onChange={setMessage}/>
                    </div>
                </div>
                <button className='bg-blue text-white p-3 mt-4 rounded font-bold '>Submit</button>
            </form>
        </div>

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
</LayoutNew>
  )
}


const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  }

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    // 'image',
    // 'video',
  ]

export default Mailer