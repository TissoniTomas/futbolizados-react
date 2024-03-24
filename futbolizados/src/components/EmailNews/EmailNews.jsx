

import { Button,  Label, TextInput } from 'flowbite-react';
import { ModeContext } from '../../context/ModeContext';
import { useContext } from 'react';

const EmailNews =()=> {

  const {mode} = useContext(ModeContext)
  return (
    <form className={`flex w-full max-w-md flex-col items-center gap-4 ${
      mode === "light" ? "bg-white" : "bg-gray-900"
    }`}>
      <div className='w-64 '>
        <div className="mb-2 block text-center">
          <Label value='Email' />
        </div>
        <div className={`${
      mode === "light" ? "bg-white" : "bg-gray-900"
    }`}>

        <TextInput className={``} id="email1" type="email" placeholder="name@email.com" required />
        </div>
      </div>  
        
      <Button className='w-52 mb-6' type="submit">Submit</Button>
    </form>
  );
}

export default EmailNews
