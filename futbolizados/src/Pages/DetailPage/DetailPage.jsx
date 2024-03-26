import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { ModeContext } from "../../context/ModeContext";
import SpinnerWarning from "../../components/SpinnerWarning/SpinnerWarning";

import { RxThickArrowUp } from "react-icons/rx";

import { RxThickArrowDown } from "react-icons/rx";
const DetailPage = () => {
  const { id } = useParams();
  const { mode } = useContext(ModeContext);

  const { counter, setCounter } = useContext(ShoppingCartContext);

  const [dataRemera, setDataRemera] = useState({});
  const [opcionTalle, setOpcionTalle] = useState("");
  const [opcionTalleNoDisponible, setOpcionTalleNoDisponible] = useState(false);

  useEffect(() => {
    const q = query(
      collection(db, "remerasCollection"),
      where(documentId(), "==", id)
    );
    const getData = async () => {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setDataRemera({ ...doc.data(), id: doc.id });
      });
    };

    getData();
  }, []);

  const tallesRemeras = () => {
    if (dataRemera && dataRemera.talles) {
      let claves = Object.keys(dataRemera.talles);
      claves.sort((a, b) => {
        const orden = { S: 1, M: 2, L: 3, XL: 4, XXL: 5 };
        return orden[a] - orden[b];
      });
      return claves;
    } else {
      return [];
    }
  };

  const tallesMap = tallesRemeras();

  const handleValue = (e) => {
    setCounter(e.target.value);
  };

  const toggleCounterUp = () => {
    setCounter(counter + 1);
  };

  const toggleCounterDown = () => {
    setCounter(counter > 0 ? -1 : 0);
  };

  const selectTalleNoDisponible = (opcion) => {
    setOpcionTalleNoDisponible(opcion);
    setOpcionTalle(opcion);
  };


  return (
    <div
      className={`flex flex-col items-center ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } `}
    >
      <img src={dataRemera.img} alt={dataRemera.name} />
      <h1
        className={`font-YakartaBold text-3xl text-center mt-14 mx-4 ${
          mode === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        {dataRemera.name}
      </h1>
      <p
        className={`text-center font-YakartaRegular text-xl mt-10 mx-10 ${
          mode === "light" ? "text-gray-900" : "text-white"
        }`}
      >
        {dataRemera.description}
      </p>
      <div className="flex items-center justify-around w-60 mt-10">
        <span className="text-xl">Talle:</span>

        <div className="flex">
          {tallesMap.map((opcion, index) => (
            <div key={index} className="mx-4 relative">
              <div className="p-2  text-center relative">
                {dataRemera.talles[opcion] > 0 ? (
                  <div className="text-center relative">
                    <div
                      className={`${
                        mode === "light" ? "text-gray-900" : "text-white"
                      } flex items-center justify-center text-lg text-center`}
                      onClick={() =>
                        opcionTalle === opcion
                          ? setOpcionTalle("")
                          : setOpcionTalle(opcion)
                      }
                    >
                      {opcion}
                      {opcionTalle === opcion && (
                        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
                          <SpinnerWarning />
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span
                      onClick={() => selectTalleNoDisponible(opcion)}
                      className={`${
                        mode === "light" ? "text-gray-900" : "text-white"
                      } text-lg text-center`}
                    >
                      {opcion}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20">
        {opcionTalleNoDisponible === opcionTalle && (
          <span className="text-red-700">Talle seleccionado no disponible</span>
        )}
      </div>
      <div className="flex flex-col items-center  my-10">
        <span className="mb-6 text-3xl">Cantidad:</span>
        <div className="flex justify-center items-center">
          <input
            type="text"
            name="counter"
            id="counter"
            value={counter}
            onChange={handleValue}
            className="rounded-full"
          />
          <RxThickArrowUp
            className={`${
              mode === "light" ? "text-gray-900" : "text-white"
            } ml-4`}
            size={36}
            onClick={toggleCounterUp}
          />
          <RxThickArrowDown
            className={`ml-4 ${
              mode === "light" ? "text-gray-900" : "text-white"
            }`}
            size={36}
            onClick={toggleCounterDown}
          />
        </div>
      </div>
      <button
        className="border rounded-full bg-sky-500 text-white font-semibold h-10 my-10  font-MontserratBold text-lg px-4 "
        type="submit"
      >
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default DetailPage;
