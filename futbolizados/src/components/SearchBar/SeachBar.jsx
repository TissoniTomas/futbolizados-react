import { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ModeContext } from "../../context/ModeContext";
import { InputContext } from "../../context/InputContext";
import { db } from "../../firebase/firebaseConfig";
import { collection, query,  getDocs } from "firebase/firestore";

const SeachBar = () => {
    const { input, setDataFiltrada, setInput } = useContext(InputContext);
    const { mode } = useContext(ModeContext);
 
  
    const fetchData = async () => {
      try {
        const q = query(collection(db, "remerasCollection"));
        const querySnapshot = await getDocs(q);
        const dataFS = [];
        querySnapshot.forEach((doc) => {
          dataFS.push({ ...doc.data(), id: doc.id });
        });
        return dataFS;
      } catch (error) {
        console.error("Error getting documents: ", error);
        return [];
      }
    };
  
    const filtrador = async () => {
      const dataFiltrada = await fetchData();
      setDataFiltrada(dataFiltrada.filter((elemento) =>
        elemento.name.toLowerCase().includes(input.toLowerCase())
      ));
    };
  
    const filterInput = (e) => {
      let dataInput = e.target.value;
      setInput(dataInput);
    };
  
  return (
    <div
      className={`flex items-center justify-center py-10 ${
        mode === "light" ? "bg-white" : "bg-gray-900"
      }  `}
    >
      <input
        className={`${
          mode === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
        } rounded-xl`}
        onChange={filterInput}
        type="text"
        name="filter"
        id="filter"
        placeholder="River, Boca, Racing..."
      />
      <Link to={`/search/${input}`}>
        <div >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-8 h-8 ml-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            } `}
            onClick={filtrador}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default SeachBar;
