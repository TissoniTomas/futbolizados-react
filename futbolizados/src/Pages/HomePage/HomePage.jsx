import { useState, useEffect, useContext } from "react";
import { Carrousel } from "../../components/Carrousel/Carrousel";
import CarrouselEquipos from "../../components/CarrouselEquipos/CarrouselEquipos";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemListFilter from "../../components/ItemListFilter/ItemListFilter";
import HomeDescription from "../../components/HomeDescription/HomeDescription";
import EmailNews from "../../components/EmailNews/EmailNews";
import { ModeContext } from "../../context/ModeContext";

const HomePage = () => {
  const { mode } = useContext(ModeContext);
  const [data, setData] = useState([]);
  
  const q = query(
    collection(db, "remerasCollection"),
    where("oferta", "==", true)
  );
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(q);
      const dataFS = [];
      querySnapshot.forEach((doc) => {
        dataFS.push({ ...doc.data(), id: doc.id });
        console.log(doc.id, " => ", doc.data());
      });
      setData(dataFS);
    };
    getData();


  }, []);

  return (
    <>
      <Carrousel />
      <main className="flex flex-col items-center  ">
        <div
          className={`h-screen w-full ${
            mode === "light" ? "bg-white" : "bg-gray-900"
          }`}
        >
          <h1
            className={`text-center text-2xl font-MontserratBold pt-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            La indumentaria de tu club en Futbolizados{" "}
          </h1>

          <HomeDescription />
          <CarrouselEquipos />
        </div>
        <div
          className={` mt-56 ${mode === "light" ? "bg-white" : "bg-gray-900"}`}
        >
          <h2
            className={`text-center text-2xl font-MontserratBold pt-10 ${
              mode === "light" ? "text-gray-900" : "text-gray-200"
            }`}
          >
            Productos destacados
          </h2>
          <ItemListFilter remeras={data} />
        </div>
        <div className={`w-screen ${mode === "light" ? "bg-white" : "bg-gray-900"}`}>

        <h2 className={`text-xl text-center mt-6 ${
          mode === "light" ? "text-gray-900" : "text-gray-200"
        }`}> Recibi las ultimas novedades de futbolizados</h2>
        <EmailNews />
        </div>
      </main>
    </>
  );
};

export default HomePage;
