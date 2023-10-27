import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemListContainer = ({greeting}) => {
  return (
    <section>
    <Container>
      <Row>
        <Col>
        <h1 className="text-center">{greeting}</h1>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default ItemListContainer