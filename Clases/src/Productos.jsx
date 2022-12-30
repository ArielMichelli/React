import React, { Component } from "react";
import Producto from "./Producto";

class Productos extends Component {
    constructor() {
        super()
        this.state = {
            compra: false,
            titulo: "Productos",
            productos: [
                {
                    id: 1,
                    title: "Moto G",
                    price: "1000",
                    category: "Celulares",
                },
                {
                    id: 1,
                    title: "Moto W",
                    price: "1000",
                    category: "Celulares",
                },
                {
                    id: 1,
                    title: "Moto >",
                    price: "10500",
                    category: "Celulares",
                },
            ]
        }
    }
    handleComprar = () => {
        this.state.compra = true;
    }
    handleClick = () => {
        console.log("handleClick HOLA");
        this.setState({
            titulo: "Productos Modificados"
        })
    }
    handleClickAgregarProducto = () => {
        this.setState(
            {
                productos: [
                    {
                        id: 4,
                        title: "producto nuevo",
                        price: "5555",
                        category: "Celular1"

                    }
                ]
            }
        )
    }
    render() {
        if (this.state.compra) {
            return <div>Gracias por su COMPRA!</div>
        } else {
            return (
                <div>
                    <h1>{(this).state.titulo}:</h1>
                    <button onClick={this.handleClick}>Cambiar Titulo</button>
                    {this.state.productos.map((prod) => <Producto
                        title={prod.title}
                        price={prod.price}
                        category={prod.category}
                    />
                    )}
                    <button onClick={this.handleClickAgregarProducto}>Agregar Producto</button>
                </div >
            )
        }
    }
}
export default Productos;