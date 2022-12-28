import React, { Component } from "react";
import imagen from './camara.jpg';

class MyApp extends Component {
    render() {
        return (
            <>
                <h2>Nombre: Camara Digital</h2>
                <h2>Descripcion: Camara muy buena y barata</h2>
                <h2>Precio: 32000$</h2>
                <h2>SKU: 123-456-789</h2>
                <h2>Cantidad disponible: 8</h2>
                <img src={imagen} alt="Foto producto 1" />
            </>
        )
    }

}

export default MyApp;
