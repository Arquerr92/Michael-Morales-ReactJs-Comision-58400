import ItemCount from './ItemCount';
import "../ItemListContainer/ItemListContainer.css";


const ItemDetail = ( {item} ) => {

  

  return (
        <div className="container">
        <div className="producto-detalle">
            <div>
                <img src={item.imagen} alt={item.titulo} />
                <h3 className="titulo">Nombre del producto: {item.titulo}</h3>
                <p className="descripcion">Descripción: {item.info}</p>
                <p className="categoria">Categoría: {(item.categoria)}</p>
                <p className="precio">Precio: ${item.precio}</p>
                <ItemCount/>
            </div>
        </div>
    </div>
    
  )
}

export default ItemDetail