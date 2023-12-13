import React from 'react';
import './style/Delivery.css'
import PedidosYa from '../img/PedidosYa.webp';
import Yaigo from '../img/Yaigo.webp';
import Uver from '../img/Uver.webp';
export const Delivery = () => {
return (
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
);
}

export default Delivery;