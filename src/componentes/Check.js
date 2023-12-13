import React from 'react';
import '../componentes/style/Registrarse.css'
import { FaFacebook, FaLock, FaUser, FaUserEdit, FaUserFriends, FaUserSecret } from "react-icons/fa";
export const Check = () => {
return (
    <div className="resgistro">
        <div class="container-regi">
            <div class="item-section">
            <h2 class="logo"><i class='bx bxs-building'></i>Beefy Bites</h2>
                <div class="text-item">
                    <h2>¡Bienvenido! <br/>
                    <span>
                    Estamos encantados de tenerte de nuevo.
                    </span>
                    </h2>
                    <p>Gracias a ti, estamos creciendo más allá de nuestras expectativas. 
                    Compartamos el éxito cada día.</p>
                
                </div>
            </div>
            {/**
            <div class="login-section">
            <div class="form-box login">
                <form action="">
                    <h2>Iniciar Sesión</h2>
                    <div class="input-box">
                        <span class="icon"><FaUser/></span>
                        <input type="text" required/>
                        
                    </div>
                    <div class="input-box">
                        <span class="icon"><FaLock/></span>
                        <input type="password"  required/>
                        
                    </div>
                    <div class="remember-password">
                        
                        <a href="#">Olvidaste tu contraseña</a>
                    </div>
                    <button class="btn-regi">Ingresar</button>
                    <div class="create-account">
                        <p>¿Aún no tienes cuenta?<a href="#" class="register-link"> 
                            Registrarse</a></p>
                    </div>
                </form>
            </div> */}
                <div class="register-section">
                    <form action="">

                        <h2>Registrarse</h2>

                        <div class="input-box">
                            <span class="icon"><FaUser className='User'/></span>
                            <input type="text" required placeholder='Nombre'></input>
                        </div>

                        <div class="input-box">
                            <span class="icon"><FaUserEdit className='User'/></span>
                            <input type="text" required placeholder='Usuario'/>
                            
                        </div>

                        <div class="input-box">
                            <span class="icon"><FaLock/></span>
                            <input type="password" required placeholder='Contraseña'/>
                            
                        </div>

                        <div class="remember-password">
                            <label for=""><input type="checkbox"/>Estoy de acuerdo con
                            los términos y condiciones</label>
                        </div>

                        <button class="btn-regi">Registrarse</button>

                        <div class="create-account">
                            <p>¿Tienes una cuenta? <a href="/registrarse" class="login-link">
                            Iniciar Sesión</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
);
}

export default Check;