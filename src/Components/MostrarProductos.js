import React, {Component} from "react";

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
                <div> {valores.map(valor => <div> {valor.marca} {valor.modelo} {valor.año} { } ${valor.precio}  </div>)}</div> 
                     
            )
            }
    }

export default MostrarProductos;