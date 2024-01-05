import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";

function Carrousel() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("../../../slider.json")
      .then((res) => res.json())
      .then((slider) => {
        setSlider(slider)});
  },[]);

  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slide={false}>
       {slider.map((slid)=>( 
         <img key={slid.id} src={slid.image} alt={slid.title} />
      ))}
        
      </Carousel>
    </div>
  );
}

export default Carrousel;

