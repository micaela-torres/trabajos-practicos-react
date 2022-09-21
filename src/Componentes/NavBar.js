import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from './CartWidget';
import { NavLink } from "react-router-dom";


function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <img src="../img/logo-color.png" alt="" width={150} />
                    <ul>
                        <Nav className="me-auto">
                            <li>
                                <NavLink to="/">Productos</NavLink>
                                <li>
                                    <NavLink to="/categoria/Algabo">Algabo</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/categoria/Iberia">Iberia</NavLink>
                                </li>
                            </li>
                            <li>
                                <NavLink to="/contacto">Contacto</NavLink>
                            </li>
                            <li>
                                <NavLink to="/carrito"><CartWidget /></NavLink>
                            </li>
                        </Nav>
                    </ul>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;