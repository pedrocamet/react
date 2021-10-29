import React, {Component} from "react";
import "./UltimoCliente.css"


class UltimoCliente extends Component {

    constructor(props){
        super(props);
        this.state = {
            valores: []
        }
    }

        componentDidMount(){
            fetch("http://localhost:3005/usuario/ultimo-cliente")
                .then(response => response.json())
                .then(data => this.setState( {valores: data.data}))
                .catch(error => console.log(error))

        }
        

        render(){

            const {valores} = this.state
           

            return (

                <div className="ultimoClientef"> 
                     <div className="datosUltimoCliente">
                        <p className="ultimoClienteNombreDato"> {valores.nombre} </p>
                    
                        <p className="ultimoClienteApellidoDato"> {valores.apellido}</p>
                    
                        <p className="ultimoClienteMailDato"> {valores.mail}</p>
                        
                    </div>
                    <div className="fotoUltimoClientef">
                      <img src={`http://www.localhost:3005/img/perfil/${valores.foto}`} alt= "foto"></img>
                    </div>
                </div> 
                     
            )
            }
    }

export default UltimoCliente;