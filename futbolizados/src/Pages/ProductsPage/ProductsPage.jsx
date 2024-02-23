import React, { useContext, useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemListFilter from "../../components/ItemListFilter/ItemListFilter";
import { ModeContext } from "../../context/ModeContext";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [filtrador, setFiltrador] = useState(false);
  const { mode } = useContext(ModeContext);
  const [talleFiltro, setTalleFiltro] = useState("");
  const [clubFiltro, setClubFiltro] = useState("");
  const [dataFiltrada, setDataFiltrada] = useState([]);
  const [remerasTalle, setRemerasTalle] = useState({});

  useEffect(() => {
    const q = query(collection(db, "remerasCollection"));
    const getData = async () => {
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
      setData(data);
    };
    getData();
  }, []);

  const setFiltro = () => {
    setFiltrador(!filtrador);
  };

  const selectTalle = (talle) => {
    talleFiltro === talle ? setTalleFiltro("") : setTalleFiltro(talle);
  };

  const borrarFiltros = () => {
    setClubFiltro("");
    setTalleFiltro("");
  };

  useEffect(() => {
    const filtrador = () => {
      let filtrado = data;

      if (talleFiltro) {
        switch (talleFiltro) {
          case "S":
            filtrado = filtrado.filter((el) => el.talles.S > 0);
            break;
          case "M":
            filtrado = filtrado.filter((el) => el.talles.M > 0);
            break;
          case "L":
            filtrado = filtrado.filter((el) => el.talles.L > 0);
            break;
          case "XL":
            filtrado = filtrado.filter((el) => el.talles.XL > 0);
            break;
          case "XXL":
            filtrado = filtrado.filter((el) => el.talles.XXL > 0);
            break;
          default:
            break;
        }
        console.log(talleFiltro);
      }

      if (clubFiltro) {
        filtrado = filtrado.filter((remera) => remera.name.includes(clubFiltro));
      }

      setDataFiltrada(filtrado);
    };

    const totalRemerasPorTalle = () => {
      const tallesDisponibles = ["S", "M", "L", "XL", "XXL"];
      const totalesPorTalle = {};

      tallesDisponibles.forEach((talle) => {
        const totalPorTalle = data.reduce((acc, remera) => {
          return acc + (remera.talles[talle] ? remera.talles[talle] : 0);
        }, 0);
        totalesPorTalle[talle] = totalPorTalle;
      });
      setRemerasTalle(totalesPorTalle);
      console.log(totalesPorTalle);
    };

    filtrador();
    totalRemerasPorTalle();
  }, [talleFiltro, data, clubFiltro]);

  useEffect(() => {
    console.log(dataFiltrada);
  }, [dataFiltrada]);

  const clubesUnicos = new Set(data.map((item)=>item.club));

  console.log(clubesUnicos);

  const arrayClubes = Array.from(clubesUnicos)

  

  return (
    <>
      <div
        className={`flex justify-evenly ${
          mode === "light" ? "bg-white" : "bg-gray-900"
        } `}
      >
        <button
          onClick={setFiltro}
          className={` w-40 h-16 rounded-lg my-10 text-white bg-blue-800 font-MontserratRegular font-bold text-2xl`}
          type="button"
        >
          Filtrar
        </button>
        {filtrador && (
          <div
            className={` w-screen h-screen top-0 absolute ${
              mode === "light" ? "bg-white" : "bg-gray-900"
            } animate-fade-right animate-ease-in animate-duration-500 `}
          >
            <h3 className="text-3xl my-4 text-center text-white font-YakartaRegular">
              Talle
            </h3>
            <ul className="grid grid-cols-2 gap-4 justify-items-center">
              <div className="flex">
                <li
                  onClick={() => selectTalle("S")}
                  className={`list-none p-1 cursor-pointer text-white ${
                    talleFiltro === "S"
                      ? "border border-red-500 rounded-lg "
                      : null
                  }`}
                >
                  S <span className="text-gray-600">({remerasTalle.S})</span>
                </li>
              </div>
              <div className="flex">
                <li
                  onClick={() => selectTalle("M")}
                  className={`list-none p-1 cursor-pointer text-white ${
                    talleFiltro === "M"
                      ? "border border-red-500 rounded-lg "
                      : null
                  }`}
                >
                  MD <span className="text-gray-600">({remerasTalle.M})</span>
                </li>
              </div>
              <div className="flex">
                <li
                  onClick={() => selectTalle("L")}
                  className={`list-none p-1 cursor-pointer text-white ${
                    talleFiltro === "L"
                      ? "border border-red-500 rounded-lg "
                      : null
                  }`}
                >
                  LG <span className="text-gray-600">({remerasTalle.L})</span>
                </li>
              </div>

              <div className="flex">
                <li
                  onClick={() => selectTalle("XL")}
                  className={`list-none p-1 cursor-pointer text-white ${
                    talleFiltro === "XL"
                      ? "border border-red-500 rounded-lg "
                      : null
                  }`}
                >
                  XL <span className="text-gray-600">({remerasTalle.XL})</span>
                </li>
              </div>
              <div className="flex">
                <li
                  onClick={() => selectTalle("XXL")}
                  className={`list-none p-1 cursor-pointer text-white ${
                    talleFiltro === "XXL"
                      ? "border border-red-500 rounded-lg "
                      : null
                  }`}
                >
                  XXL{" "}
                  <span className="text-gray-600">({remerasTalle.XXL})</span>
                </li>
              </div>
            </ul>

            <ul>
              <h3 className="text-3xl my-4 text-center text-white font-YakartaRegular">
                Club
              </h3>
              <div className="grid grid-cols-2 gap-y-10 justify-items-center ">
                

                
            {

              arrayClubes.map((club, index) => (
                <div  key={index}>
                    <li
                      className={`mr-10 text-white cursor-pointer ${
                        clubFiltro === club
                        ? "border border-red-500 rounded-lg"
                        : null
                      }`}
                      onClick={clubFiltro !== club ? () => setClubFiltro(club) : ()=> setClubFiltro("")}
                      >
                      {club}
                    </li>
                  </div>
              ))
            }
            
              </div>
            </ul>
            <div className="flex justify-around">
              <button
                onClick={() => setFiltrador(false)}
                className="text-red-600"
              >
                Aplicar Filtros
              </button>

              <button onClick={borrarFiltros} className="text-red-600">
                Borrar Filtros
              </button>
            </div>
          </div>
        )}
        <button
          className={`w-40 h-16 rounded-lg my-10 text-white bg-blue-800 font-MontserratRegular font-bold text-2xl`}
          type="button"
        >
          Ordenar
        </button>
      </div>
      <div className={`w-full`}>
        <ItemListFilter
          remeras={dataFiltrada.length > 0 ? dataFiltrada : data}
        />
      </div>
    </>
  );
};

export default ProductsPage;
