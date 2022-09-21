import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ItemCount from './ItemCount';

function ItemDetail({ codigo, nombre, precio }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-info" onClick={handleShow}>
                Descripcion
            </Button>

            <Modal show={show} id={codigo} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className='h5'>Producto: {nombre}</Modal.Title>
                    <Modal.Title className='mx-4 h4'>Precio: ${precio}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img></img>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='' variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="outline-info" onClick={handleClose}>
                        comprar
                    </Button>
                    <ItemCount stock="15" onAdd={(contador) => alert(`Usted añadio ${contador} producto`)} />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ItemDetail