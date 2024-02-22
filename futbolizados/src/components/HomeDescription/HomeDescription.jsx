import React, { useContext } from "react";
import { ModeContext } from "../../context/ModeContext";

const HomeDescription = () => {
  const {mode} = useContext(ModeContext)
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="flex flex-col items-center mb-10 mx-10 text-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            } `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>
          <span
            className={`text-lg font-YakartaRegular ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Todas las tarjetas de credito y debito
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mb-10 mx-10 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            } `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>
          <span
            className={`text-lg font-YakartaRegular ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Envios a todo el pais en compras mayores a $40.000
          </span>
        </div>
        <div className="flex flex-col items-center mb-10 mx-10 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-10 h-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            } `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
            />
          </svg>
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
