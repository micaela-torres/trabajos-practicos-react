import Item from "./Item";

const ItemList = ({ props }) => {
    return (
        <div>
            {

                props.map((item) => {
                    return <Item
                        key={item.codigo}
                        product={item}

                    />
                })

            }

        </div>
    )
}

export default ItemList