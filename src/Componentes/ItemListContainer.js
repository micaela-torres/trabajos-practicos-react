import ItemCount from "./ItemCount";
import ItemList from "./ItemList";


const ItemListContainer = ({ symart }) => {

    return (
        <div>
            <h1>{symart}</h1>
            <div>
                <ItemCount stock="15" onAdd={(contador) => alert(`Usted añadio ${contador} producto`)} />
            </div>
            <div>
                <ItemList />
            </div>
        </div>

    )
}

export default ItemListContainer;
