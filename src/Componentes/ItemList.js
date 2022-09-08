import Item from "./Item";
import { useEffect } from "react";
import { useState } from "react";
import { productos } from "../productos.json"

const getProductos = () => {
    const task = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    });
    return task;
}

const ItemList = () => {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        getProductos().then(response => {
            setProductos(response)
        })
    }, [])
    return Productos.map(item => <Item item={item} key={item.id} />)
}

export default ItemList