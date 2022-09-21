import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';


const Item = (props) => {
    return (
        <Link to={`/categoria/${props.codigo}`}>

            <CardGroup className="row">
                <Card key={props.codigo}>
                    <Card.Img variant="top" src={props.codigo} />
                    <Card.Body>
                        <Card.Title>{props.nombre}</Card.Title>
                        <Card.Text>{props.descripcion}</Card.Text>
                        <Card.Text>${props.precio}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">{props.marca}</small>
                    </Card.Footer>
                </Card>
            </CardGroup >
        </Link>
    )
}

export default Item