import React, { Component } from "react";
import Producto from "./Producto";

class Productos extends Component {
    constructor() {
        super()
        this.state = {
            vendido: false,
            productos: [
                {
                    nombre: "Lavarropas Dream",
                    descripcion: "Lavarropas multifuncion extra lavador",
                    precio: "50000$",
                    codigo: "APQ-R55",
                    cantidad: 50,
                },
                {
                    nombre: "Heladera LG",
                    descripcion: "Heladera Smart con pantalla integrada",
                    precio: "350000$",
                    codigo: "QRL-J55",
                    cantidad: 12,
                },
                {
                    nombre: "Aspiradora multifuncion",
                    descripcion: "Aspiradora Atma de 900W de potencia",
                    precio: "70000$",
                    codigo: "LSK-P60",
                    cantidad: 150,
                },
                {
                    nombre: "Afeitadora electrica patito",
                    descripcion: "Afeitadora inteligente con conexion a internet",
                    precio: "150000$",
                    codigo: "ASD-R15",
                    cantidad: 6,
                },
            ]
        };

    }

    handleClickComprar = () => {
        this.setState({
            vendido: true,
        });
    };

    render() {
        if (this.state.vendido) {
            return (
                <div>
                    <h1>GRACIAS POR SU COMPRA !!!!!</h1>
                </div>)
        } else {
            return (
                <div>
                    {this.state.productos.map((prod) => (
                        <Producto
                            nombre={prod.nombre}
                            descripcion={prod.descripcion}
                            precio={prod.precio}
                            codigo={prod.codigo}
                            cantidad={prod.cantidad}
                            comprar={this.handleClickComprar}
                        />
                    ))}

                </div>
            )
        }
    }
}

export default Productos;