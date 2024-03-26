import React, { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";
import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import { SiMercadopago } from "react-icons/si";
import { FaCcDinersClub } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdPublishedWithChanges } from "react-icons/md";

const HomeDescription = () => {
  const { mode } = useContext(ModeContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="flex flex-col items-center mb-10 mx-10 text-center ">
          <div className="flex justify-between w-screen px-10">
            <FaCcVisa
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}
            />
            <FaCcMastercard
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}
            />
            <SiMercadopago
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}
            />
               <SiAmericanexpress
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}
            />
               <FaCcDinersClub
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}
            />
          </div>
          <span
            className={`text-lg font-YakartaRegular ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Todas las tarjetas de credito y debito
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 mx-10 text-center">
        <LiaShippingFastSolid
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}/>
          <span
            className={`text-lg font-YakartaRegular ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Envios a todo el pais en compras mayores a $40.000
          </span>
        </div>
        <div className="flex flex-col items-center mb-10 mx-10 text-center">
        <MdPublishedWithChanges
              size={44}
              color={`${mode === "light" ? "black" : "white"}`}
            />
          <span
            className={`text-lg font-YakartaRegular ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Cambios y devoluciones hasta 30 dias{" "}
          </span>
        </div>
      </div>
    </>
  );
};

export default HomeDescription;
