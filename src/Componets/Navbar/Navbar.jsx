// import Navbar from 'react-bootstrap/Navbar';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import './Navbar.css';

// function FormExample() {
//   return (
//     <Navbar className="bg-body-tertiary justify-content-between">     
//       <Form inline>
//         <Row>
//           <Col xs="auto">
//             <Form.Control
//               type="text"
//               placeholder="Search"
//               className=" mr-sm-2"
//             />
//           </Col>
//           <Col xs="auto">
//             <Button type="submit">Submit</Button>
//           </Col>
//         </Row>
//       </Form>
//     </Navbar>
//   );
// }

// export default FormExample;

import React from 'react';
import './Navbar.css'; // Asegúrate de mover los estilos a este archivo

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="ruta_a_tu_logo.png" alt="Logo" />
            </div>
            <div className="buttons">
                <button><i class="fa-solid fa-user"></i></button>
                <button><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </div>
    );
}

export default Navbar;


