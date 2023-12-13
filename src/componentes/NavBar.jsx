
import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import Logo from '../img/Logo.png';
import './NavBar.css';
import { FaBars, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className='menu-cont'>
        < div className='logo'>
          <img src={Logo}/>
          <a className='nam-log' href="/inicio">BeefyBites</a>
        </ div>
        
        
        <input type="checkbox" id="check"/>
            <label for="check" class="btn-bars"><FaBars/></label>
          <Nav>
            <ul>
            <li><a className='text-menus' href="/inicio">Inicio</a></li>
            <li><a className='text-menus' href='/menus'>Menu</a></li>
            <li><a className='text-menus' href='/cupones'>Cupones</a></li>
            <li><a className='text-menus' href="/restaurantes">Restaurantes</a></li>
            <li><a className='text-menus' href="/novedades">Novedades</a></li>
            <li><a className='text-menus' href="/delivery">Delivery</a></li>
            <li><a className='text-menus' href="/contactos">Contactos</a></li>
            <li><a className='text-menus' href="/nosotros">Nosotros</a></li>
            <li><a className='text-menus' href="/registrarse">Registrarse</a></li>
      
            </ul>
          </Nav>

        
      </Container>
    </Navbar>
  );
}