import { useContext } from "react";
import { Button } from "flowbite-react";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { ButtonContext } from "../../context/ButtonContext";

const SubmitButton = ({ dataObject }) => {
  const [datosForm] = dataObject;
  const { setDataEnviada, setSpinner } = useContext(ButtonContext);

  const sendData = async () => {
    if (Object.keys(datosForm).length === 5) {
      try {
        setTimeout(() => {
          setSpinner(true); // Mostrar el spinner antes de enviar los datos
        }, 1000);

        const docRef = await addDoc(collection(db, "contactCollection"), {
          datosForm,
        });

        setTimeout(() => {
          setSpinner(false); // Ocultar el spinner después de que se complete la operación
          setDataEnviada(true); // Establecer dataEnviada en true para indicar que los datos se han enviado correctamente
        }, 4000);
      } catch (error) {
        console.error("Error al enviar los datos:", error);

        setSpinner(false); // Asegúrate de que el spinner se oculte en caso de error
        setDataEnviada(false);
      }
    } else {
      console.log("Error ");
    }
  };

  return (
    <Button
      className="w-44"
      outline
      onClick={sendData} // Llama a sendData directamente en el evento onClick
      gradientDuoTone="cyanToBlue"
    >
      Enviar Formulario
    </Button>
  );
};

export default SubmitButton;
