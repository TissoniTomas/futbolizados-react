import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ModeContext } from "../../context/ModeContext";


const ItemCard = ({data}) => {
  const {mode} =  useContext(ModeContext)
  return (
   <div className={`flex flex-col items-center shadow-2xl border  ${mode === "light" ? "bg-white" : "bg-gray-900"}`} >
    <img className="w-96" src={data.img} alt={data.name} />
    <h1 className="font-MontserratBold font-extrabold font-display text-center text-gray-600 text-2xl antialiased">{data.name}</h1>
    <span className="text-3xl font-YakartaBold text-sky-500 mt-4 text-center">${data.price}</span>
    <Link to={`/product/${data.id}`}>

    <button type="button" className="border rounded-full bg-sky-500 text-white font-semibold h-10 my-10  font-MontserratBold text-lg px-4 ">See More</button>
    </Link>
   </div>
  );
};

export default ItemCard;
