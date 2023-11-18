import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contacto = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    

  }
    return (
    <div>
    <section>
        <h1>Contacto</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Correo Electronico:</Form.Label>
        <Form.Control type="email" placeholder="Correo@ejemplo.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comentario:</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit" variant="success" >Enviar</Button>
    </Form>
    <img className='imagen-inicio' src="./src/assets/img/blog2.webp" alt="no encontrada" />
    </section>
    
</div>
    )
}

export default Contacto