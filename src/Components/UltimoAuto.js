import React, {Component} from "react";
import "./UltimoAuto.css"

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
                <div className="ultimo-auto-global"> 
                    <h4 className="ultimo-auto-titulo"> Marca </h4>
                        <p className="ultimo-auto-marca"> {valores.marca} </p>
                    <h4 className="ultimo-auto-titulo"> Modelo </h4>
                        <p className="ultimo-auto-modelo"> {valores.modelo}</p>
                    <h4 className="ultimo-auto-titulo"> Año </h4>
                        <p className="ultimo-auto-año"> {valores.año}</p>
                    <h4 className="ultimo-auto-titulo"> Precio </h4>
                        <p className="ultimo-auto-precio"> ${valores.precioDia}</p>
                    <h4 className="ultimo-auto-titulo"> Descripción </h4>
                        <p className="ultimo-auto-descripcion"> {valores.descripcion}</p>
                    <h4 className="ultimo-auto-titulo"> Foto </h4>
                        <p className="ultimo-auto-foto"> {valores.foto}</p>
                </div> 
                     
            )
            }
    }

export default UltimoAuto;