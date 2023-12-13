
import React from 'react';
import '../componentes/style/Menus.css'
import  Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import P1 from '../img/P1.png';
import P2 from '../img/P2.png';
import P3 from '../img/P3.png';
import P4 from '../img/P4.png';
import P5 from '../img/P5.png';
import P6 from '../img/P6.png';
import C1 from '../img/C1.png';
import C2 from '../img/C2.png';
import C3 from '../img/C3.png';
import KJ1 from '../img/KJ1.png';
import KJ2 from '../img/KJ2.png';
import E1 from '../img/E1.png';
import E2 from '../img/E2.png';
import E3 from '../img/E3.png';
import A1 from '../img/A1.png';
import A2 from '../img/A2.png';
import A3 from '../img/A3.png';
import B1 from '../img/B1.png';
import B2 from '../img/B2.png';
import B3 from '../img/B3.png';
import B4 from '../img/B4.png';
import B5 from '../img/B5.png';
import B6 from '../img/B6.png';
import PO1 from '../img/PO1.png';
import PO2 from '../img/PO2.png';
import PO3 from '../img/PO3.png';
import PO4 from '../img/PO4.png';
import PO5 from '../img/PO5.png';
import PO6 from '../img/PO6.png';
export const Menus = () => {
  return (
    <div className="Menu-cont">
      <div className='fondo'>
        <h1>PARRILLERO</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={P1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={P2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={P3} />
        <Card.Body>
          <Card.Title className='title'>Bacon BeffyDoble</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={P4} />
        <Card.Body>
          <Card.Title className='title'>Big BITES</Card.Title>
          <Card className='text'>
          Nuestra BIG KING® cuenta con dos carnes a la parrilla, una rebanada de queso americano, lechuga fresca, cebolla crujiente, pepinillos y salsa especial con tres rebanadas de pan suave con ajonjolí. ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={P5} />
        <Card.Body>
          <Card.Title className='title'>Staker</Card.Title>
          <Card className='text'>
          Prueba la presentación de la STACKER en cuatro tentadores tamaños que incluyen simple, doble, triple y cuádruple, carne de hamburguesa a la parrilla, acompañadas por los más deliciosos ingredientes, queso americano, tocino y la sabrosísima salsa Stacker. ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={P6} />
        <Card.Body>
          <Card.Title className='title'>Rodes</Card.Title>
          <Card className='text'>
          Carne de res a la parrilla, queso americano, aros de cebolla crujientes, salsa BBQ ¿ya se te antojó, verdad? ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>


      <div className='fondo'>
        <h1>COMBOS DE POLLO</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={C1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={C2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={C3} />
        <Card.Body>
          <Card.Title className='title'>Bacon BeffyDoble</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>
      
    </div>
    </div>

    
      
    </div>
    </div>

    <div className='fondo'>
        <h1>BEFFY JR</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={KJ1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={KJ2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>
      
    </div>
    </div>
      


    <div className='fondo'>
        <h1>ENSALADAS</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={E1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={E2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={E3} />
        <Card.Body>
          <Card.Title className='title'>Bacon BeffyDoble</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>
      
    </div>
    </div>



    <div className='fondo'>
        <h1>ACOMPAÑAMIENTOS</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={A1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={A2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={A3} />
        <Card.Body>
          <Card.Title className='title'>Bacon BeffyDoble</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>
      
    </div>
    </div>


    <div className='fondo'>
        <h1>BEBIDAS</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={B1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={B2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={B3} />
        <Card.Body>
          <Card.Title className='title'>Bacon BeffyDoble</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={B4} />
        <Card.Body>
          <Card.Title className='title'>Big BITES</Card.Title>
          <Card className='text'>
          Nuestra BIG KING® cuenta con dos carnes a la parrilla, una rebanada de queso americano, lechuga fresca, cebolla crujiente, pepinillos y salsa especial con tres rebanadas de pan suave con ajonjolí. ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={B5} />
        <Card.Body>
          <Card.Title className='title'>Staker</Card.Title>
          <Card className='text'>
          Prueba la presentación de la STACKER en cuatro tentadores tamaños que incluyen simple, doble, triple y cuádruple, carne de hamburguesa a la parrilla, acompañadas por los más deliciosos ingredientes, queso americano, tocino y la sabrosísima salsa Stacker. ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={B6} />
        <Card.Body>
          <Card.Title className='title'>Rodes</Card.Title>
          <Card className='text'>
          Carne de res a la parrilla, queso americano, aros de cebolla crujientes, salsa BBQ ¿ya se te antojó, verdad? ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
    </div>


    <div className='fondo'>
        <h1>POSTRES</h1>
        <div className="card-cont">
      <Card className='cards'>
        <img src={PO1} />
        <Card.Body>
          <Card.Title className='title'>XT STEAKHOSE</Card.Title>
          <Card className='text'>
          Otra excelente hamburguesa XT ya está dentro del menú de las preferidas de la Colección The Kings. La XT Steakhouse es extremadamente grande y deliciosa, 100% a la parrilla. Pruébala y queda fascinado con su sabor, no esperes más pídela en Combo, en el Restaurante que tu prefieras, Pídela por Delivery o arma tu pedido desde la nueva APP BK.


          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={PO2} />
        <Card.Body>
          <Card.Title className='title'>Crunchy Beffy Swiss</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={PO3} />
        <Card.Body>
          <Card.Title className='title'>Bacon BeffyDoble</Card.Title>
          <Card className='text'>
          Prueba la nueva Colección del Rey y disfruta de una Crunchy King Doble con queso suizo, o quizás de una espectacular Doble Cuarto de Libra King o la siempre esperada King Tocino Doble.
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={PO4} />
        <Card.Body>
          <Card.Title className='title'>Big BITES</Card.Title>
          <Card className='text'>
          Nuestra BIG KING® cuenta con dos carnes a la parrilla, una rebanada de queso americano, lechuga fresca, cebolla crujiente, pepinillos y salsa especial con tres rebanadas de pan suave con ajonjolí. ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={PO5} />
        <Card.Body>
          <Card.Title className='title'>Staker</Card.Title>
          <Card className='text'>
          Prueba la presentación de la STACKER en cuatro tentadores tamaños que incluyen simple, doble, triple y cuádruple, carne de hamburguesa a la parrilla, acompañadas por los más deliciosos ingredientes, queso americano, tocino y la sabrosísima salsa Stacker. ¡Pídela en COMBO con papas fritas y refresco frío!
          </Card>
          <div className='btn-cont'>
            <Button className='btn' href='/delivery'>Pedir</Button>
          </div>
        </Card.Body>
      </Card>

      <Card className='cards'>
        <img src={PO6} />
        <Card.Body>
          <Card.Title className='title'>Rodes</Card.Title>
          <Card className='text'>
          Carne de res a la parrilla, queso americano, aros de cebolla crujientes, salsa BBQ ¿ya se te antojó, verdad? ¡Pídela en COMBO con papas fritas y refresco frío!
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

export default Menus;