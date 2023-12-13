import React from "react"
import '../componentes/style/Inicio.css'
import Carousel from 'react-bootstrap/Carousel';
import P1 from '../img/P1.png';
import C1 from '../img/C1.png';
import KJ1 from '../img/KJ1.png';
import C3 from '../img/C3.png';

import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import NOV1 from '../img/NOV1.png';
import NOV2 from '../img/NOV2.png';
import NOV33 from '../img/NOV33.jpg';

import PedidosYa from '../img/PedidosYa.webp';
import Yaigo from '../img/Yaigo.webp';
import Uver from '../img/Uver.webp';

import Video from '../vid/Video.mp4'
export const  Inicio = () => {
    return (
        <div className="inicio">
            <div className="cont-caroucel">
                
                    <div className="caroucel">
                        <div className="ul">
                            <Carousel.Item className="cont-img">
                                <img text="First slide" src={P1}/>
                                <Carousel.Caption className="text-ini">
                                    <h3>XT STEAKHOUSE</h3>
                                    <p>Una nueva y extremadamente deliciosa hamburguesa de la colección The Kings.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            <Carousel.Item className="cont-img">
                                <img text="Second slide" src={C1} />
                                <Carousel.Caption className="text-ini">
                                    <h3>BK NUGGETS</h3>
                                    <p>¡Bocados de sabor!.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            
                            <Carousel.Item className="cont-img">
                                <img text="Third slide" src={KJ1}/>
                                    <Carousel.Caption className="text-ini" >
                                        <h3>BEEFY JR. NUGGETS</h3>
                                        <p>¡Winner winner chicken dinner!.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item className="cont-img">
                                <img text="Third slide" src={C3}/>
                                    <Carousel.Caption className="text-ini" >
                                        <h3>BEEFY JR. NUGGETS</h3>
                                        <p>¡Winner winner chicken dinner!.</p>
                                    </Carousel.Caption>
                            </Carousel.Item>
                        </div>
                    </div>
                
            </div>


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

    <div className="video">
      <h1>¿Estás viendo doble? No. Estas bien, es nuestra hamburguesa doble carne, doble queso, doble todo, porque te duplicamos el sabor.</h1>
    <video width={700} height={400} autoPlay controls muted>
        <source src={Video} type="video/mp4"/>
      </video>
    </div>

    </div>

    <div className="delivery">
        <div className="cont-target">
            <h1>Servicio a domicilio</h1>
            <p>Realiza tu pedido en linea</p>
            <div className="enlace-img">
                <nav>
                    <ul>
                        <li><a href="https://www.pedidosya.com/"><img src={PedidosYa} alt="" /></a></li>
                        <li><a href="https://play.google.com/store/apps/details?id=com.osbolivia.yaigocomercio&hl=es_BO&gl=US&pli=1"><img src={Yaigo} alt="" /></a></li>
                        <li><a href="https://www.ubereats.com/es"><img src={Uver} alt="" /></a></li>
                    </ul>
                </nav>
            </div>
        </div>

    </div>
        </div>
    )
}