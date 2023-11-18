import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import "../ItemListContainer/ItemListContainer.css"



const ItemCount = () => {

  const [cantidad, setCantidad] = useState(1)
  
 

  return (
    <div>
        <Button variant="primary" onClick={() => {setCantidad(cantidad + 1)}}>+</Button>{' '}
        <Button variant="primary">
        <Badge bg="secondary">{cantidad}</Badge>
        <span className="visually-hidden">unread messages</span>
        </Button>
        <Button variant="primary" onClick={() => {cantidad > 1 && setCantidad(cantidad - 1)} }>-</Button>{' '}
        <Button variant="success">Agregar al Carrito</Button>{' '}
    </div>
  )
}

export default ItemCount