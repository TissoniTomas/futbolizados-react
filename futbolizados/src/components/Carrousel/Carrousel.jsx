
import { Carousel } from 'flowbite-react';
import { ModeContext } from '../../context/ModeContext';
import { useContext } from 'react';

export function Carrousel() {
  const {mode} = useContext(ModeContext)
  return (
    <div className={`h-56 sm:h-64 xl:h-80 2xl:mx-20 2xl:h-[800px] ${mode === "light" ? null : "bg-gray-900"}`}>
      <Carousel>
        <img className='2xl:h-full' src="https://todosobrecamisetas.com/wp-content/uploads/camisetas-kappa-velez-sarsfield-2019-20-h.jpg" alt="..." />
        <img className='2xl:h-full' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt5d1fd57323aeb915/6504a73a405a7c1c1b2fe4a6/Sin_t%C3%ADtulo(1).png?auto=webp&format=pjpg&width=3840&quality=60" alt="..." />
        <img className='2xl:h-full' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt8c564904ff38e58d/644bc4e7efd3e5bc4f338c63/camiseta_alternativa_river_nueva.png?auto=webp&format=pjpg&width=3840&quality=60" alt="..." />
        <img className='2xl:h-full' src="https://todosobrecamisetas.com/wp-content/uploads/camiseta-kappa-racing-2022-h.jpg" alt="..." />
        <img className='2xl:h-full' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2ef1bd430f4b57f6/6329d43ea0e3d810c8950936/Sin_t%C3%ADtulo.png" alt="..." />
      </Carousel>
    </div>
  );
}

