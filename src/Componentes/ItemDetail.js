
function ItemDetail({ details }) {


    return (
        <div>
            <p>Detalles</p>
            <div className='itemDetail'>
                <div>
                    <img src="" alt="" />
                </div>
                <h1>{details.producto}</h1>
                <p>${details.precio}</p>
                <p>{details.descripcion}</p>
            </div>
        </div>
    )
}

export default ItemDetail