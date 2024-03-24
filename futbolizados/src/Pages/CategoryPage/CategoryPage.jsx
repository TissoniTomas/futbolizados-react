import { useContext, useEffect, useState } from "react";
import { ModeContext } from "../../context/ModeContext";
import { useParams } from "react-router-dom";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";
import ItemListFilter from "../../components/ItemListFilter/ItemListFilter";
import SpinnerLoading from "../../components/Spinner/Spinner";

const CategoryPage = () => {
  const { mode } = useContext(ModeContext);
  const { club } = useParams();
  const [data, setData] = useState([]);
  const [filtradoParams, setFiltradoParams] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(()=>{
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  },[])

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "remerasCollection"));
      const querySnapshot = await getDocs(q);
      const dataFS = [];
      querySnapshot.forEach((doc) => {
        dataFS.push({ ...doc.data(), id: doc.id });
      });
      setData(dataFS);

      
    };

    fetchData();

    const filtrarPorClub = () => {
      const filtrado = data.filter((item) =>
        item.club.toLowerCase().includes(club.toLowerCase())
      );
      setFiltradoParams(filtrado);
    };

    setTimeout(() => {
      setSpinner(false);
    }, 3000);
    filtrarPorClub();
  }, [data, club]);

  return (
    <>
      {spinner ? (
        <div>
          <SpinnerLoading />
        </div>
      ) : (
        <div>
          <ItemListFilter remeras={filtradoParams} />
        </div>
      )}
    </>
  );
};

export default CategoryPage;
