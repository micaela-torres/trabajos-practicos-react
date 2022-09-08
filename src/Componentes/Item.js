
const Item = (props) => {
    return (
        <div>
            <img src="" alt="" />
            <div>
                <h5>{props.producto}</h5>
                <p>{props.descripcion}</p>
                <p>{props.precio}</p>
            </div>

        </div>

    )
}

export default Item