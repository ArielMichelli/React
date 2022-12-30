import React, { Component } from "react";

class Producto extends Component{

    render(){
        return(
        <div>
            <h2>{this.props.title}</h2>
            <p>{this.props.price}</p>
            <p>{this.props.category}</p>
            <button>Comprar</button>
        </div>
        )
    }
}
export default Producto;