import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './style/Nosotros.css';
import Perfil from '../img/Perfil.jpg';
import { FaFacebook } from "react-icons/fa";

export const Nosotros = () => {
return (
    <div className="nosotros">
        <div className="cont-perfil">
        <Card className='perfil-cards'>
      <div className='perfil-img'>
        <img variant="top" src={Perfil} />
      </div>
      <div className='perfil-info'>
        <Card.Body>
          <Card.Title className='title-lan'>L.A.N.</Card.Title>
          <Card.Text className='text-info'>
            NOMBRE: Luna Alanoca Noel <br></br>
            C.I.:    10937247 LP. <br />
            R.U.: 1802330 <br />
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            Hola! Mi nombre es Noel, naci un 24 de<br /> 
            diciembre a visperas de navidad, soy <br />
            de la ciudad de la paz, mis deportes <br />
            son el boley boll y natacion.
        </ListGroup>
        <Card.Body>
            <h1>Mis redes</h1>
            <a href='https://www.facebook.com/?locale=es_LA' className='icons'>
            <FaFacebook className='face-book' />
          </a>
        </Card.Body>
      </div>
    </Card>
        </div>
    </div>
);
}

export default Nosotros;