import React, { useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemListFilter = ({ remeras }) => {


  return (
    <div className="">
      {remeras.map((remera) => ( 
        <div key={remera.id}>

        <ItemCard data={remera} />
        </div>
      ))}
    </div>
  );
};

export default ItemListFilter;
