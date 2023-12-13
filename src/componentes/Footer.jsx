import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit'
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import './Footer.css'
import Logo from '../img/Logo.png'
export const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='footer'>
      <section className='foot-icon'>
     

        <div>
          <a href='' className='icons'>
            <FaFacebook className='face'/>
          </a>
          <a href='' className='icons'>
            <FaTwitter className='face' />
          </a>
          <a href='' className='icons'>
            <FaGoogle className='face'/>
          </a>
          <a href='' className='icons'>
            <FaInstagram className='face'/>
          </a>
          <a href='' className='icons'>
            <FaLinkedin className='face'/>
          </a>
          <a href='' className='icons'>
            <FaGithub className='face'/>
          </a>
        </div>
      </section>
      <hr/>
      <section className='text-info'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              
              <h6 className='text-nom'>
                BeefyBites
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-res'>Restaurantes</h6>
              <p>
                <a href='#!' className='text-reset'>
                  zona sur calle 15 de obrajes
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  El alto teleferico morado
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Zona Mirafrolores 
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Cbba. calle tablas esq. colomi
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-res'>Novedades</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Nueva Coleccion King
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pack Familiar
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Coleccion del Rey
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  XT Steakhouse
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-res'>Contactos</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                La Paz, Bolivia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                BeefyBites@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +059-66828282
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> +059-76548156
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        BeefyBites © 2023 Copyright: 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          L.A.N.
        </a>
      </div>
    </MDBFooter>
  );
}