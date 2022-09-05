import React from "react";
import ItemCount from "./ItemCount";


const ItemListContainer = ({ symart }) => {

    return (
        <div>
            <h1>{symart}</h1>
            <div>
                <ItemCount stock="15" onAdd={(contador) => alert(`Usted añadio ${contador} producto`)} />
            </div>
        </div>

    )
}

export default ItemListContainer;
