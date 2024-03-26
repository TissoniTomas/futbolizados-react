import { Label, Textarea } from "flowbite-react";
import { ModeContext } from "../../context/ModeContext";
import { useContext } from "react";

function TextAreaComponent({label, dataObject}) {

  const {mode} = useContext(ModeContext)
  const [datosForm, setDatosForm] = dataObject;

 
    const handleChange = (e) => {
      let input = e.target.value;
      console.log(input);
      let newData = {Descripcion: input}; // Crear un nuevo objeto de datos
      setDatosForm(prevState => ({
        ...prevState, // Mantener el estado anterior
        ...newData // Agregar los nuevos datos
      }));
     
    };

  return (
    <div className="max-w-md w-72">
      <div className="mb-2 flex flex-col items-center">
        <Label className={`${mode === "light" ? "text-gray-900" : "text-white"} text-xl`} htmlFor="comment" value={label} />
      </div>
      <Textarea onChange={handleChange} id="comment" placeholder="Leave a comment..." required rows={4} />
    </div>
  );
}

export default TextAreaComponent