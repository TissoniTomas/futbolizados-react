import { Label, Select } from "flowbite-react";
import { ModeContext } from "../../context/ModeContext";
import { useContext, useEffect } from "react";

function SelectForm({ dataObject }) {
  const { mode } = useContext(ModeContext);
  const [datosForm, setDatosForm] = dataObject;

  const opciones = [
    "Eliga una opcion",
    "Envios y entregas",
    "Reembolosos",
    "Quejas y reclamos",
    "Otro",
  ];

  const handleChange = (e) => {
    const opcionElegida = e.target.value;
    if(opcionElegida === "Eliga una opcion"){
      return 
    }
    let newData = { Opcion: opcionElegida };
    setDatosForm((prevState) => ({
      ...prevState,
      ...newData,
    }));
    
  };

  useEffect(()=>{
console.log(datosForm)
  },[datosForm])

  return (
    <div
      className={`flex w-full max-w-md flex-col items-center gap-4 ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } max-w-md`}
    >
      <div className="mb-2 block">
        <Label
          className={`${
            mode === "light" ? "text-gray-900" : "text-white"
          } text-xl`}
          htmlFor="opciones"
          value="Motivo de su contacto"
        />
      </div>
      <Select className="w-72" id="opciones" onChange={handleChange} required>
        {opciones.map((opcionElegida, index) => (
          <option className="text-center" key={index} value={opcionElegida}>
            {opcionElegida}
          </option>
        ))}
      </Select>
    </div>
  );
}

export default SelectForm;
