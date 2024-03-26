import { Label, TextInput } from "flowbite-react";
import { ModeContext } from "../../context/ModeContext";
import { useContext, useEffect } from "react";

const InputText = ({ label, placeholder, name, dataObject }) => {
  const { mode } = useContext(ModeContext);
  const [datosForm, setDatosForm] = dataObject;

 
    const handleChange = (e) => {
      let input = e.target.value;
      console.log(input);
      let newData = {[name]: input}; 
      setDatosForm(prevState => ({
        ...prevState, 
        ...newData 
      }));
     
    };

  return (
    <div>
      <div className="mb-2 flex flex-col items-center w-72">
        <Label
          className={`${
            mode === "light" ? "text-gray-900" : "text-white"
          } text-xl `}
          htmlFor="small"
          value={label}
        />
      </div>
      <TextInput
        name={name}
        onChange={handleChange}
        id="small"
        type="text"
        sizing="sm"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputText;
