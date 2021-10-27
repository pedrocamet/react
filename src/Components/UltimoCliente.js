import React, {Component} from "react";


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
                <div className="ultimo-auto-global"> 
                    <h4 className="ultimo-auto-titulo"> Nombre</h4>
                        <p className="ultimo-auto-marca"> {valores.nombre} </p>
                    <h4 className="ultimo-auto-titulo"> Apellido </h4>
                        <p className="ultimo-auto-modelo"> {valores.apellido}</p>
                    <h4 className="ultimo-auto-titulo">Email </h4>
                        <p className="ultimo-auto-año"> {valores.mail}</p>
                    <h4 className="ultimo-auto-titulo"> Foto </h4>
                        <p className="ultimo-auto-foto"> {valores.foto}</p>
                        <img src={`http://www.localhost:3005/img/perfil/${valores.foto}`} alt= "foto"></img>
                </div> 
                     
            )
            }
    }

export default UltimoCliente;