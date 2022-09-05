import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";



const ItemCount = ({ stock, cuenta = 1, onAdd }) => {
    const [contador, setContador] = useState(cuenta);


    return (
        <div>
            <Button variant="outline-info" onClick={() => setContador(contador - 1)}>-</Button>{' '}
            Productos seleccionados: {contador}
            <Button variant="outline-info" onClick={() => setContador(contador + 1)}>+</Button>{' '}
            <div>
                <Button variant="outline-info" onClick={() => onAdd(contador)}>Agregar al carrito</Button>{' '}
            </div>

        </div>
    );
}

export default ItemCount;