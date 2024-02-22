import React from "react";
import { Carousel } from "flowbite-react";
import VelezCard from "../../assets/cards/velezresize.png";
import IndependienteCard from "../../assets/cards/Independiente.png";
import RacingCard from "../../assets/cards/racing.jpg";

const CarrouselEquipos = () => {
  return (
    <div  className="h-[650px]   xl:h-80 2xl:mx-20 2xl:h-[800px]">
      <Carousel indicators={false}>
        <div className=" relative hover:scale-105 transition-transform hover:ease-linear mb-56">
          <img
            className=" w-full h-full "
            src="https://www.tiendariver.com/arquivos/banner_cat_hom_DESKTOP.png?v=638418977775800000"
            alt=""
          />
          <h4 className="absolute inset-x-0 bottom-0 px-4 py-2 bg-[rgba(0,0,0,0.75)] text-white text-center bg-opacity-10  transition-opacity duration-300 ">
            River
          </h4>
        </div>
        <div className=" relative hover:scale-105 transition-transform hover:ease-linear">
          <img
            className=" w-full h-full "
            src="https://www.bocashop.com.ar/arquivos/BocaShop2023_Categor%C3%ADas_02_MASC.jpg"
            alt=""
          />
          <h4 className="absolute inset-x-0 bottom-0 px-4 py-2 bg-[rgba(0,0,0,0.75)] text-white text-center bg-opacity-10  transition-opacity duration-300 ">
            Boca
          </h4>
        </div>
        <div className=" relative hover:scale-105 transition-transform hover:ease-linear">
          <img className=" w-full h-full " src={VelezCard} alt="" />
          <h4 className="absolute inset-x-0 bottom-0 px-4 py-2 bg-[rgba(0,0,0,0.75)] text-white text-center bg-opacity-10  transition-opacity duration-300 ">
            Velez
          </h4>
        </div>
        <div className=" relative hover:scale-105 transition-transform hover:ease-linear">
          <img className=" w-full h-full " src={IndependienteCard} alt="" />
          <h4 className="absolute inset-x-0 bottom-0 px-4 py-2 bg-[rgba(0,0,0,0.75)] text-white text-center bg-opacity-10  transition-opacity duration-300 ">
            Independiente
          </h4>
        </div>
        <div className=" relative hover:scale-105 transition-transform hover:ease-linear">
          <img className=" w-full h-full " src={RacingCard} alt="" />
          <h4 className="absolute inset-x-0 bottom-0 px-4 py-2 bg-[rgba(0,0,0,0.75)] text-white text-center bg-opacity-10  transition-opacity duration-300 ">
            Racing
          </h4>
        </div>
      </Carousel>
    </div>
  );
};

export default CarrouselEquipos;
