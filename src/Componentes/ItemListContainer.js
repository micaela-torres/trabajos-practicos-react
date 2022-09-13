
import ItemList from "./ItemList";


const ItemListContainer = ({ symart }) => {

    return (
        <div>
            <h1>{symart}</h1>
            <div>
                <ItemList />
            </div>
        </div>

    )
}

export default ItemListContainer;
