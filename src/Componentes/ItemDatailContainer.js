import { useEffect } from "react";
import { useState } from "react";
import ItemDetail from "./ItemDetail";
import productos from "../productos.json";


const ItemDatailContainer = () => {
    const [details, setDetails] = useState({});

    useEffect(() => {
        const getDetalles = new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);
            },);
        });
        getDetalles.then(res => setDetails(res));
    }, [])
    return (
        <>
            <ItemDetail props={details} />
        </>

    )
}

export default ItemDatailContainer