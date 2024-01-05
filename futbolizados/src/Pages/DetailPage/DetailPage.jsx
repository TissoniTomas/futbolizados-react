import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [dataFiltrada, setDataFiltrada] = useState({});
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    fetch("../../../remeras.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        let filtroData = data.find((item) => item.id == id);
        console.log(filtroData);
        setDataFiltrada(filtroData);
      });
  }, [id]);

  const toggleCounterUp = () => {
    setCounter(counter + 1);
  };

  const toggleCounterDown = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="flex flex-col items-center">
      <img src={dataFiltrada.imageRemera} alt={dataFiltrada.titleRemera} />
      <h1 className="font-YakartaBold text-3xl mt-10 mx-4">
        {dataFiltrada.titleRemera}
      </h1>
      <p className="text-center font-YakartaRegular text-xl mt-10 mx-10">
        {dataFiltrada.descriptionRemera}
      </p>
      <div className="flex items-center justify-around w-60 mt-10">
        <span className="text-xl">Talle:</span>
        <select name="talle" id="talle">
          <option className="text-red-500 opacity-35" value="S">
            S
          </option>
          <option className="text-red-500 opacity-35" value="M">
            M
          </option>
          <option className="text-red-500 opacity-35" value="L">
            L
          </option>
          <option className="text-red-500 opacity-35" value="XL">
            XL
          </option>
          <option className="text-red-500 opacity-35" value="XXL">
            XXL
          </option>
        </select>
      </div>
      <div className="flex items-center justify-around w-60 my-10">
        <span>Cantidad:</span>
        <input className="w-10" type="number" name="" id="" value={counter} />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={toggleCounterUp}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={toggleCounterDown}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
      <button
        className="border rounded-full bg-sky-500 text-white font-semibold h-10 my-10  font-MontserratBold text-lg px-4 "
        type="submit"
      >
        AGREGAR AL CARRITO
      </button>
    </div>
  );
};

export default DetailPage;
