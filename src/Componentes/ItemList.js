import Item from "./Item";
import productos from "../productos.json"
import { useEffect } from "react";



const ItemList = () => {

    useEffect(() => {
        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            })
        });

        task.then(productos);
    }, []);

    return (
        <div>
            {
                productos.map((productos) => {
                    return <Item
                        key={productos.codigo}
                        nombre={productos.producto}
                        descripcion={productos.descripcion}
                        marca={productos.marca}
                        precio={productos.precio}
                    />


                })
            }
        </div>
    )

}

export default ItemList