import productos from "../productos.json";
import { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ symart }) => {
    const [details, setDetails] = useState('');
    const { id } = useParams()

    useEffect(() => {
        const getProduct = () => new Promise(resolve => {
            setTimeout(() => {
                resolve(productos);

            },);
        });
        if (id) {
            getProduct().then(res => setDetails(res.filter(item => item.codigo === id)));
        } else {
            getProduct().then(res => setDetails(res));
        }
    }, [id]);

    return (
        <div>
            <h1>{symart}</h1>
            <div>
                <ItemList props={details} />
            </div>
        </div>

    )
}

export default ItemListContainer;
