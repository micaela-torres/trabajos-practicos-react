import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ItemCount from "../Componentes/ItemCount"

const Item = (props) => {
    return (
        <CardGroup className="row">
            <Card key={props.codigo}>
                <Card.Img variant="top" src={props.codigo} />
                <Card.Body>
                    <Card.Title>{props.producto}</Card.Title>
                    <Card.Text>{props.descripcion}</Card.Text>
                    <Card.Text>${props.precio}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{props.marca}</small>
                </Card.Footer>
                <div>
                    <ItemCount stock="15" onAdd={(contador) => alert(`Usted añadio ${contador} producto`)} />

                </div>
            </Card>

        </CardGroup>
    )
}

export default Item