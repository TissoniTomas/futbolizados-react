import React, { useState } from "react";
import InputText from "../../components/InputText/InputText";
import EmailNews from "../../components/EmailNews/EmailNews";
import TextAreaComponent from "../../components/TextAreaComponent/TextAreaComponent";
import SelectForm from "../../components/SelectForm/SelectForm";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import ResetButton from "../../components/ResetButton/ResetButton";
import SpinnerWarning from "../../components/SpinnerWarning/SpinnerWarning";
import { ModeContext } from "../../context/ModeContext";
import { ButtonContext } from "../../context/ButtonContext";
import { useContext } from "react";

const ContactPage = () => {
  const { mode } = useContext(ModeContext);
  const {spinner, dataEnviada} = useContext(ButtonContext)


  const [datosForm, setDatosForm] = useState({});

  let textoContacto =
    "Desde futbolizados queremos ofrecerte el mejor servicio post-venta posible. Cualquier duda o consulta respecto a tu compra, devoluciones, reclamos, o simplemente dejarnos un comentario, este es tu lugar. Dejanos tu contacto y comentario y nos contactermos contigo a la brevedad.";

  const render = () => {
    if (!dataEnviada) {
    
      if (spinner) {
       
        return <SpinnerWarning />;
      } else {
       
        return (
          <form>
            <InputText
              dataObject={[datosForm, setDatosForm]}
              name="Nombre"
              label="Nombre"
              placeholder="Ingrese su nombre"
            />
            <InputText
              dataObject={[datosForm, setDatosForm]}
              name="Apellido"
              label="Apellido"
              placeholder="Ingrese su apellido"
            />
           <EmailNews datosForm={datosForm} setDatosForm={setDatosForm} />

            <SelectForm dataObject={[datosForm, setDatosForm]} />
            <TextAreaComponent
              dataObject={[datosForm, setDatosForm]}
              label="Mensaje"
            />
            <div className="flex flex-col items-center justify-center w-72 gap-y-6 mt-4">
              <SubmitButton
                dataObject={[datosForm]}
              
              />
              <ResetButton dataObject={[datosForm, setDatosForm]} />
            </div>
          </form>
        );
      }
    } else {
      
      return <h2 className={`${
        mode === "light" ? "text-sky-700" : "text-sky-400"
      } text-center text-xl my-20 px-4`}>Informacion enviada con éxito, nos estaremos contactando a la brevedad</h2>;
    }
  };

  return (
    <div
      className={`flex w-full max-w-md flex-col items-center gap-4 ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      }`}
    >
      <h1
        className={`${
          mode === "light" ? "text-gray-900" : "text-white"
        } text-center text-2xl`}
      >
        Comunicate con nosotros
      </h1>
      <p
        className={`flex w-full max-w-md flex-col items-center gap-4 ${
          mode === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        } px-10`}
      >
        {textoContacto}
      </p>

      {render()}
    </div>
  );
};

export default ContactPage;
