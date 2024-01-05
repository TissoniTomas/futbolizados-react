import React from "react";


const ItemCard = ({data}) => {
  return (
   <div>
    <img src={data.imageRemera} alt="" />
    <h1>{data.titleRemera}</h1>
   </div>
  );
};

export default ItemCard;
