import React, {Component} from "react";
import "./MostrarProductos.css"

class MostrarProductos extends Component {

    constructor(props){
        super(props);
        this.state = {
            valores: []
        }
    }

        componentDidMount(){
            fetch("http://localhost:3005/productos-totales")
                .then(response => response.json())
                .then(data => this.setState( {valores: data.data}))
                .catch(error => console.log(error))


        }

        render(){

            const {valores} = this.state
           

            return (
                <div className="mostrar-producto-T"> {valores.map(valor => <div>
                    <div className="mostrar-producto-global">
                        <p className="detalle-mostrar-producto-marca">{valor.marca}</p>
                        <p className="detalle-mostrar-producto-modelo">{valor.modelo}</p>
                        <p className="detalle-mostrar-producto-año">{valor.año}</p> { } 
                        <p className="detalle-mostrar-producto-precio">${valor.precio}</p>
                    </div>
                     
                    </div>)}
                </div> 
                     
            )
            }
    }

export default MostrarProductos;