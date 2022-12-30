import React, { Component } from "react";

class Producto extends Component {
    render() {
        return (
            <div className="producto">
                <h2 className="titulo_producto">{this.props.nombre}</h2>
                <p>Descripcion: {this.props.descripcion}</p>
                <p>Precio: {this.props.precio}</p>
                <p>Codigo: {this.props.codigo}</p>
                <p>Cantidad: {this.props.cantidad}</p>
                <button className="boton_compra" onClick={this.props.comprar}>Comprar</button>
            </div>
        )
    }
}
export default Producto