import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { Link } from "react-router-dom"


function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <img src="../img/logo-color.png" alt="" width={150} />
                    <Nav className="me-auto">
                        <Nav.Link><Link to="/">Inicio</Link>Inicio</Nav.Link>
                        <Nav.Link><Link to="/productos"></Link>Productos</Nav.Link>
                        <Nav.Link><Link to="/contacto"></Link>Contacto</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;