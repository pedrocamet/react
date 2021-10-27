import React, {Component} from "react";

class UltimoAuto extends Component {

    constructor(props){
        super(props);
        this.state = {
            valores: []
        }
    }

        componentDidMount(){
            fetch("http://localhost:3005/ultimo-producto")
                .then(response => response.json())
                .then(data => this.setState( {valores: data.data}))
                .catch(error => console.log(error))

        }
        

        render(){

            const {valores} = this.state
           

            return (
                <div> 
                    <p> Marca: {valores.marca} </p>
                    <p>Modelo: {valores.modelo}</p>
                    <p>Año: {valores.año}</p>
                    <p>Precio: {valores.precio}</p>
                    <p>Descripción: {valores.descripcion}</p>
                    <p>Foto: {valores.foto}</p>
                </div> 
                     
            )
            }
    }

export default UltimoAuto;