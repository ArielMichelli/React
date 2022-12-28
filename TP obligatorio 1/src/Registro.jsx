import React, { Component } from "react";

class Registro extends Component {
    render() {
        return (
            <>
                <h1 className="titulo">REGISTRO</h1>
                <div className="fila">
                <label htmlFor="">Nombre: </label> <input type="text" />
                </div>
                <div className="fila">
                <label htmlFor="">Apellido: </label> <input type="text" />
                </div>
                <div className="fila">
                <label htmlFor="">Email:</label> <input type="email" />
                </div>
                <div className="fila">
                <label htmlFor="">Telefono: </label> <input type="tel" />
                </div>
                <div className="fila">
                <label htmlFor="">Password: </label> <input type="password" />
                </div>
                <div className="fila">
                <label htmlFor="">Confirmar Password: </label> <input type="password" />
                </div>
                <div className="fila">
                <button className="enviar" type="submit">Enviar</button>
                </div>
            </>
        )
    }

}

export default Registro;
