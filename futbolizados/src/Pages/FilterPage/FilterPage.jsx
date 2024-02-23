import { useContext, useState, useEffect } from "react";
import { InputContext } from "../../context/InputContext";
import { ModeContext } from "../../context/ModeContext";

import ItemListFilter from "../../components/ItemListFilter/ItemListFilter";

const FilterPage = () => {
  const {dataFiltrada} = useContext(InputContext);
  const {mode} = useContext(ModeContext)
  useEffect(()=>{
    console.log(dataFiltrada);
  },[dataFiltrada])
  return (
    <div className={`${mode === "light" ? "bg-white" : "bg-gray-900"}`}>
      <h1 className={`text-center font-MontserratBold text-4xl ${mode === "light" ? "text-gray-900" : "text-white"} mb-10`}>Resultados de la busqueda</h1>
      <ItemListFilter remeras={dataFiltrada} />
    </div>
  );
};

export default FilterPage;
