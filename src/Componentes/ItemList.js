import Item from "./Item";
import productos from "../productos.json";
import { useEffect } from "react";
import ItemDetail from "../Componentes/ItemDetail";
import ItemCount from "../Componentes/ItemCount";


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
                    return (
                        <>
                            <Item
                                key={productos.codigo}
                                nombre={productos.producto}
                                descripcion={productos.descripcion}
                                marca={productos.marca}
                                precio={productos.precio}
                            />

                            <ItemDetail id={productos.codigo} nombre={productos.producto} precio={productos.precio} />
                            <ItemCount stock="15" onAdd={(contador) => alert(`Usted añadio ${contador} producto`)} />
                        </>
                    )

                })
            }
        </div>
    )

}

export default ItemList