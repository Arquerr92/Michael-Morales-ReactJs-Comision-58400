import React from 'react'
import Item from './Item'
import "../ItemListContainer/ItemListContainer.css"
import { toCapital } from '../../helpers/toCapital'



export const ItemList = ({productos, titulo}) => {
  return (
    <div className='container'>

        <h1 className='main-title'>{toCapital(titulo)}</h1>

        <div className='productos'>
        { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
)
}
export default ItemList