
import { Label, Select } from "flowbite-react";
import { ModeContext } from '../../context/ModeContext';
import { useContext } from 'react';

function SelectForm() {
    const {mode} = useContext(ModeContext)
  return (
    <div className={`flex w-full max-w-md flex-col items-center gap-4 ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } max-w-md`}>
      <div className="mb-2 block">
        <Label  className={`${mode === "light" ? "text-gray-900" : "text-white"} text-xl`} htmlFor="countries" value="Motivo de su contacto" />
      </div>
      <Select className="w-72 " id="countries" required>
        <option className="text-center">Envios y Entregas</option>
        <option className="text-center">Reembolso</option>
        <option className="text-center">Quejas y reclamos</option>
        <option className="text-center">Otro</option>
      </Select>
    </div>
  );
}

export default SelectForm
