import { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";

const ItemListContainer = ({ section, data }) => {
  
  const [dataFiltered, setDataFiltered] = useState([]);

  useEffect(() => {
   
    switch (section) {
      case "destacados": {
        let dataFiltrada = data.filter((item) => item.isDestacado === true);
        setDataFiltered(dataFiltrada);
        console.log(dataFiltered);


        break;
      }
      case "main-ofertas": {
        let dataFiltrada = data.filter((item) => item.isOferta === true);
        setDataFiltered(dataFiltrada);
        console.log(dataFiltered);
        break;
      }

      default: {
        setDataFiltered(data);
        console.log(data);
        console.log("no hay nada");
        break;
      }
    }
  }, [section,data]);

  

  return (
    <>
      <div className="grid">
        {dataFiltered.map((data) => (
          <div key={data.id}>
            <ItemCard data={data} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
