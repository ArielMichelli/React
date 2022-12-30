import React, { Component } from "react";
import Producto from "./Producto";

class Productos extends Component {
  constructor() {
    super();
    this.state = {
      compra: false,
      loading: true,
      titulo: "Productos",
      productos: [],
    };
  }
  componentDidMount() {
    //Busco lo info en la base de datos
    setTimeout(() => {
      this.setState({
        loading: false,
        productos: [
          {
            id: 1,
            title: "Moto G",
            price: "$1000",
            category: "Celulares",
          },
          {
            id: 2,
            title: "Moto Z",
            price: "$1500",
            category: "Celulares",
          },
          {
            id: 3,
            title: "iPhone",
            price: "$2000",
            category: "Celulares",
          },
        ],
      });
    }, 1000);
  }
  handleClick = () => {
    console.log("handleClick");
    this.setState({
      titulo: "Productos Modificado",
    });
  };
  handleClickAgregarProducto = () => {
    this.setState({
      productos: [
        ...this.state.productos,
        {
          id: 4,
          title: "iPhone 13",
          price: "$2500",
          category: "Celulares",
        },
      ],
    });
  };
  handleComprar = () => {
    this.setState({
      compra: true,
    });
  };

  render() {
    if (this.state.loading) {
      return <div>Cargando...</div>;
    }
    if (this.state.compra) {
      return <div>Gracias por su compra!</div>;
    } else {
      return (
        <div className="">
          <h1>{this.state.titulo}</h1>
          <button onClick={this.handleClick}>Cambiar Titulo</button>
          {this.state.productos.map((producto) => (
            <Producto
              title={producto.title}
              price={producto.price}
              category={producto.category}
              comprar={this.handleComprar}
            />
          ))}
          <button onClick={this.handleClickAgregarProducto}>
            Agregar Producto
          </button>
        </div>
      );
    }
  }
}

export default Productos;
