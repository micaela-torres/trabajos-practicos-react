import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


const Item = (product) => {
    return (
        <Link to={`/${product.codigo}`}>

            <CardGroup className="row">
                <Card >
                    <Card.Img variant="top" src={product.codigo} />
                    <Card.Body>
                        <Card.Title>{product.nombre}</Card.Title>
                        <Card.Text>{product.descripcion}</Card.Text>
                        <Card.Text>${product.precio}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{product.marca}</small>
                    </Card.Footer>
                </Card>
            </CardGroup >
        </Link>
    )
}

export default Item