import Item from "./Item";
import productos from "../productos.json";
import { useEffect } from "react";
import ItemDetail from "../Componentes/ItemDetail";
import { useParams } from "react-router-dom";
import { useState } from "react";


const ItemList = () => {
    const [data, setData] = useState([]);

    const { marcaid } = useParams();
    useEffect(() => {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos);
            })
        });
        if (marcaid) {
            data.then(res => setData(res.filter(Algabo => Algabo.marca === marcaid)));
        } else {
            data.then(res => setData(res));
        }

    }, [marcaid]);

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

                        </>
                    )

                })
            }
        </div>
    )

}

export default ItemList