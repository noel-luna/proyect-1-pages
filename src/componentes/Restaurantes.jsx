import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../componentes/style/Restaurants.css'
export const Restaurantes = () => {
return (
    <div className="restaurantes">
        <div className='container-map'>
            <div className='cont-cards'>
                <div className='cont-rest'>
                    
                        <Card className='title-map'>Obrajes</Card>
                        <Card className='cont-card-map'>
                            <Card className='direx'>15 de calacoto</Card>
                                <Button variant="primary" className='btn-map'>Ir al sitio</Button>
                        </Card>
                    
                </div>
                <div className='cont-rest'>
                    
                        <Card className='title-map'>El Alto</Card>
                        <Card className='cont-card-map'>
                            <Card className='direx'>Teleferico morado</Card>
                                <Button variant="primary" className='btn-map'>Ir al sitio</Button>
                        </Card>
                    
                </div>
                <div className='cont-rest'>
                    
                        <Card className='title-map'>La Paz</Card>
                        <Card className='cont-card-map'>
                            <Card className='direx'>Zona Miraflores</Card>
                                <Button variant="primary" className='btn-map'>Ir al sitio</Button>
                        </Card>
                    
                </div>
                <div className='cont-rest'>
                    
                        <Card className='title-map'>Cochabamba</Card>
                        <Card className='cont-card-map'>
                            <Card className='direx'>Calle tablas, esq.Colomi</Card>
                                <Button variant="primary" className='btn-map'>Ir al sitio</Button>
                        </Card>
                    
                </div>
            </div>
            <div className="google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122403.52747846626!2d-68.20648001986493!3d-16.52053161072716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf0a04f5a40f%3A0x57dbfc76b4458ab3!2sLa%20Paz!5e0!3m2!1ses-419!2sbo!4v1702333218730!5m2!1ses-419!2sbo" width="800" height="600" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    </div>
    );
}

export default Restaurantes;