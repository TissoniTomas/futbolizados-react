

import { Label, TextInput } from 'flowbite-react';
import { ModeContext } from '../../context/ModeContext';
import { useContext } from 'react';

const EmailNews =()=> {

  const {mode} = useContext(ModeContext)
  return (
   
      <div className={`flex w-full max-w-md flex-col items-center gap-4 ${
      mode === "light" ? "bg-white" : "bg-gray-900"
    }`}>
        <div className="mb-2 block text-center ">
          <Label className={`${mode === "light" ? "text-gray-900" : "text-white"} text-xl`} value='Email' />
        </div>
        <div className={`${
      mode === "light" ? "bg-white" : "bg-gray-900"
    }  w-72`}>

        <TextInput className={``} id="email1" type="email" placeholder="name@email.com" required />
        </div>
        
     
      </div>  
   
  );
}

export default EmailNews
