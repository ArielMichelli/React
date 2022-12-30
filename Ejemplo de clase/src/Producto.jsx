import React, { Component } from "react";

class Producto extends Component {
  render() {
    console.log("Props", this.props.title);
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.price}</p>
        <p>{this.props.category}</p>
        <button onClick={this.props.comprar}>Comprar</button>
      </div>
    );
  }
}

export default Producto;
