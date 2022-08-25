import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <img src="../img/logo-color.png" width={200} />
                    <Nav className="me-auto">
                        <Nav.Link href="Inicio">Inicio</Nav.Link>
                        <Nav.Link href="Productos">Productos</Nav.Link>
                        <Nav.Link href="Lista-de-precios">Lista de precio</Nav.Link>
                        <Nav.Link href="Contacto">Contacto</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavBar;