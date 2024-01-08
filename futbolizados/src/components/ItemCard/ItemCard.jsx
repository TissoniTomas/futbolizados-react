import React from "react";
import { Link } from "react-router-dom";


const ItemCard = ({data}) => {
  return (
   <div className="flex flex-col items-center shadow-2xl border m-10 " >
    <img src={data.imageRemera} alt="" />
    <h1 className="font-MontserratBold font-extrabold font-display text-center text-gray-600 text-2xl antialiased">{data.titleRemera}</h1>
    <Link to={`/product/${data.id}`}>

    <button type="button" className="border rounded-full bg-sky-500 text-white font-semibold h-10 my-10  font-MontserratBold text-lg px-4 ">See More</button>
    </Link>
   </div>
  );
};

export default ItemCard;
