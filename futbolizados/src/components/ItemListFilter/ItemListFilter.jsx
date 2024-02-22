import React, { useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemListFilter = ({ remeras }) => {

  useEffect(()=>{
    console.log(remeras);
  },[])
  return (
    <div className="">
      {remeras.map((remera) => ( 
        <ItemCard data={remera} />
      ))}
    </div>
  );
};

export default ItemListFilter;
