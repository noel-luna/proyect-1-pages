import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style/Contactos.css'
export const Contactos = () => {
return (
    <div className="contactos">
        <div className='cont-form'>
            <h1>CONTACTANOS</h1>
        <Form>
      <Form.Group className="form-text">
        <Form.Control className='text-lavel' type="text" placeholder="Asunto" />
        <Form.Control className='text-lavel' type="email" placeholder="Correo Electronico" />
        <Form.Control className='text-lavel' type="text" placeholder="Nombre y Apellido" />
        <Form.Control className='text-lavel' type="text" placeholder="Celular" />
        <Form.Control className='text-lavel' type="text" placeholder="Orden" />
        <Form.Control className='text-lavel' type="text" placeholder="Sucursal" />
        <textarea className='textareaa' name="" id="" cols="30" rows="10" placeholder='Mensaje'></textarea>
      </Form.Group>
      <div className='btn-cont'>
        <Button variant="primary" type="submit" className='btn-form'>
          Enviar
        </Button>
      </div>
    </Form>
        </div>

    </div>
);
}

export default Contactos;