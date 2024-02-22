import { useContext, useState, useEffect } from "react";
import { InputContext } from "../../context/InputContext";

import ItemListFilter from "../../components/ItemListFilter/ItemListFilter";

const FilterPage = () => {
  const {dataFiltrada} = useContext(InputContext);
  useEffect(()=>{
    console.log(dataFiltrada);
  },[dataFiltrada])
  return (
    <div>
      <h1 className="text-center">Resultados de la busqueda</h1>
      <ItemListFilter remeras={dataFiltrada} />
    </div>
  );
};

export default FilterPage;
