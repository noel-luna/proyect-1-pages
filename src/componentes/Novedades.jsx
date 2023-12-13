import React from 'react';
import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NOV1 from '../img/NOV1.png';
import NOV2 from '../img/NOV2.png';
import NOV33 from '../img/NOV33.jpg';
export const Novedades = () => {
return (
    <div className="Novedades">
        <div className='fondo'>
        <h1>NOVEDADES</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={NOV1} />
        <Card.Body>
          <Card.Title className='title'>PACK FAMILIAR</Card.Title>
          <Card className='text'>
          Combos Especiales para disfrutar en Familia

          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={NOV2} />
        <Card.Body>
          <Card.Title className='title'>XT STECKHOUSE</Card.Title>
          <Card className='text'>
          Sabor XTremo y XTremadamente adictiva
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={NOV33} />
        <Card.Body>
          <Card.Title className='title'>COLECCION DEL REY</Card.Title>
          <Card className='text'>
          ¡Una elección en la que no puedes fallar! Pruébalas todas y siéntete como todo un Rey.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>
      
    </div>
    </div>

    </div>
);
}

export default Novedades;