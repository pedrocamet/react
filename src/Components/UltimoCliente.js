import React, {Component} from "react";

class UltimoCliente extends Component {

    constructor(props){
        super(props);
        this.state = {
            nombre: "",
            apellido: "",
            mail: "",
            foto: ""
        }
    }
    

    apiCall (url, consecuencia){
      fetch(url)
          .then(response => response.json()) 
          .then (data => consecuencia(data))
          .catch (error => console.log(error))
    }

        componentDidMount(){
            this.apiCall("http://localhost:3005/usuario/ultimo-cliente", this.datosCliente)

                
        }
        datosCliente = (data) =>   {
          this.setState(
           { nombre: data.data.nombre,
             apellido: data.data.apellido,
             mail: data.data.mail, 
             foto: data.data.foto        
          }

          )
          console.log(data.data)
        }
        
        render(){
            if(this.state.valor === ""){
                <p> Cargando... </p>
            } else {
               <h1> this.state.valor </h1> 
            }
            return (
              <div> 
                <div>
                <p> Nombre: {this.state.nombre} </p>
                <p> Apellido: {this.state.apellido} </p> 
                <p> Email: {this.state.mail} </p>  
                <p> {this.state.foto} </p>  
                </div>
                
                
              </div>
            )
            }
    }

export default UltimoCliente;