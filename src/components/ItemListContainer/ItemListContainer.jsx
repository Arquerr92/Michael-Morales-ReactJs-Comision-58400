import React, { useEffect, useState } from 'react'
import {pedirDatos} from "../../helpers/pedirDatos";
import ItemList from './ItemList';
import "../ItemListContainer/ItemListContainer.css";
import { useParams } from 'react-router-dom';



export const ItemListContainer = () => {
    
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect (() => {
    pedirDatos()
    .then((res) => {
      if (categoria) {
        setProductos(res.filter ((prod) => prod.categoria === categoria));
        setTitulo(categoria);
      }else {
        setProductos(res);
        setTitulo("Productos");
      }
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