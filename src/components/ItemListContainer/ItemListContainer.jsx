import React, { useEffect, useState } from 'react'
import {pedirDatos} from "../../helpers/pedirDatos";
import ItemList from './ItemList';
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase/data";



export const ItemListContainer = () => {
    
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect (() => {

    const productosRef = collection(db, "productos");

    const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

    getDocs(q)
    .then((resp) => {
      
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id}
        })
      )
    })


    
  },[categoria])
  


  return (
    <div className='productos'>
      <section>
      <ItemList productos={productos} titulo={titulo} />
      </section>
    
    
    </div>
    
  )
  }

export default ItemListContainer