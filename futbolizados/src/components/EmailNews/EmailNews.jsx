

import { Label, TextInput } from 'flowbite-react';
import { ModeContext } from '../../context/ModeContext';
import { useContext } from 'react';

const EmailNews =({ datosForm, setDatosForm })=> {

  const {mode} = useContext(ModeContext)


  const handleChange = (e) => {
    let input = e.target.value;
    console.log(input);
    let newData = {Email: input};
    setDatosForm(prevState => ({
      ...prevState, 
      ...newData 
    }));
   
  };

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

        <TextInput onChange={handleChange} className={``} id="email1" type="email" placeholder="name@email.com" required />
        </div>
        
     
      </div>  
   
  );
}

export default EmailNews
