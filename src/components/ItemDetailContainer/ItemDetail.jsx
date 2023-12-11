import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { toCapital } from '../../helpers/toCapital';
import ItemCount from './ItemCount';






const ItemDetail = ( {item} ) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log (carrito)
  

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
      cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
      setCantidad(cantidad + 1)
  }

  return (
        <div className="container">
        <div className="producto-detalle">
            <div>
                <img src={item.imagen} alt={item.titulo} />
                <h3 className="titulo">Nombre del producto: {item.titulo}</h3>
                <p className="descripcion">Descripción: {item.info}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">Precio: ${item.precio}</p>
                <ItemCount
                cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
                />
            </div>
        </div>
    </div>
    
  )
}

export default ItemDetail