import {useState, useEffect} from 'react'
import Carrousel from "../../components/Carrousel/Carrousel"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"


const HomePage = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("../../../remeras.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
    }, []);
    
  return (
    <>
  
    <Carrousel/>
    <main className='flex flex-col items-center my-20' >

    <h1 className='font-sans text-slate-900 text-3xl font-extrabold antialiased'>Productos Destacados
    </h1>
    <ItemListContainer  section = "destacados" data={data}/>


    </main>
    </>
  )
}

export default HomePage