import { Label, TextInput } from 'flowbite-react';
import { ModeContext } from "../../context/ModeContext";
import { useContext } from "react";

const InputText = ({label, placeholder}) => {
  const {mode} = useContext(ModeContext)
  return (
    <div>
    <div className="mb-2 flex flex-col items-center w-72">
      <Label  className={`${mode === "light" ? "text-gray-900" : "text-white"} text-xl `} htmlFor="small" value={label}  />
    </div>
    <TextInput id="small" type="text" sizing="sm" placeholder={placeholder} />
  </div>
  )
}

export default InputText