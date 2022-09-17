import React from 'react'
import NavBar from '../Componentes/NavBar'
import ItemListContainer from "../Componentes/ItemListContainer"

const Layout = () => {
    return (
        <>
            <NavBar />
            <ItemListContainer symart={"Bienvenidos a la distribuidora Symart"} />

        </>
    )
}

export default Layout