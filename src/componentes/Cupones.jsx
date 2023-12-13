import React from "react";
import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CUP1 from '../img/CUP1.jpg';
import CUP2 from '../img/CUP2.jpg';
import CUP3 from '../img/CUP3.jpg';
import CUP4 from '../img/CUP4.jpg';
import CUP5 from '../img/CUP5.jpg';
import CUP6 from '../img/CUP6.jpg';
export const Cupones = () => {
    return (
    <div className="cupones">
        <div className='fondo'>
        <h1>BLACK FREE DAY !!!</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={CUP1} />
        <Card.Body>
          <Card.Title className='title'>15% DESCUENTO</Card.Title>
          <Card className='text'>
            valido hasta 31 de diciembre

          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Canjear</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={CUP2} />
        <Card.Body>
          <Card.Title className='title'>25% DESCUENTO</Card.Title>
          <Card className='text'>
            Por la compra de cuanquier producto arriba de 50bs obtienes este cupon del 25%
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Canjear</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={CUP3} />
        <Card.Body>
          <Card.Title className='title'>15% DESCUENTO</Card.Title>
          <Card className='text'>
            15% de descuento en todas nuestras hamburguesas BIG BITES.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Canjear</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={CUP4} />
        <Card.Body>
          <Card.Title className='title'>25% DESCUENTO</Card.Title>
          <Card className='text'>
            Super descuento en BEFFY JR.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Canjear</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={CUP5} />
        <Card.Body>
          <Card.Title className='title'>35% DESCUENTO</Card.Title>
          <Card className='text'>
            Mega desceunto en las PIZZAS  hasta agotar stock.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Canjear</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={CUP6} />
        <Card.Body>
          <Card.Title className='title'>35% DESCUENTO</Card.Title>
          <Card className='text'>
            Por la compra de una PIZZA EXTRAFAMILIAR llevate la segunda con 35% de descuento.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Canjear</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>
    </div>
    );
}
export default Cupones;
