import React, { useEffect, useState } from "react";
import {db} from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import ItemListFilter from "../../components/ItemListFilter/ItemListFilter";

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const q = query(collection(db, "remerasCollection"));
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(q);
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({...doc.data(), id:doc.id});
        console.log(doc.id, " => ", doc.data());
      });
      setData(data);
    };
    getData();
  }, []);
  return (
    <>
      <div>
        <ItemListFilter remeras={data}/>
      </div>
      
    </>
  );
};

export default ProductsPage;
