import React from 'react'
import Badge from 'react-bootstrap/Badge';
import "./CartWidget.css";

export const CartWidget = () => {
  return (
    <div>
      <i className="bi bi-cart-fill cart-icon"></i>
      <h5>
        <Badge bg="secondary">7</Badge>
      </h5>
    </div>
  )
}
export default CartWidget