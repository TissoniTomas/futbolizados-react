import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link desde 'react-router-dom'
import { ModeContext } from '../../context/ModeContext';

const ItemCard = ({ data }) => {
  const { mode } = useContext(ModeContext); // Asegúrate de que ModeContext esté definido

  // Estado para controlar si se muestra la imagen de la espalda al hacer hover
  const [showBackImage, setShowBackImage] = useState(false);

  // Función para manejar el evento onMouseEnter (hover) sobre la sección
  const handleMouseEnter = () => setShowBackImage(true);

  // Función para manejar el evento onMouseLeave (salir del hover) sobre la sección
  const handleMouseLeave = () => setShowBackImage(false);

  return (
    <div className={`flex flex-col items-center shadow-2xl border ${mode === "light" ? "bg-white" : "bg-gray-900"}`}>
      {/* La sección que muestra la imagen, con eventos onMouseEnter y onMouseLeave */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Utilizando el estado showBackImage para decidir qué imagen mostrar */}
        <img className="w-96 h-[400px] animate-fade animate-duration-1000 animate-delay-0 animate-ease-in-out" src={showBackImage ? data.imgEspalda : data.img} alt={data.name} />
      </div>
      <h1 className="font-MontserratBold font-extrabold font-display text-center text-gray-600 text-2xl antialiased">{data.name}</h1>
      <span className="text-3xl font-YakartaBold text-sky-500 mt-4 text-center">${data.price}</span>
      <Link to={`/product/${data.id}`}>
        <button type="button" className="border rounded-full bg-sky-500 text-white font-semibold h-10 my-6 font-MontserratBold text-lg px-4">See More</button>
      </Link>
    </div>
  );
};

export default ItemCard;
