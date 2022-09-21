import Item from "./Item";

const ItemList = ({ props }) => {
    return (
        <div>
            {
                props.map((props) => {
                    return <Item
                        key={props.codigo}
                        nombre={props.producto}
                        precio={props.precio}
                        detalles={props.detalles}
                    />
                })
            }

        </div>
    )
}

export default ItemList