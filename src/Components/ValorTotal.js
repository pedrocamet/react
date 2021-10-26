import React, {Component} from "react";

class ValorTotal extends Component {

    constructor(props){
        super(props);
        this.state = {
            valor: ""
        }
    }

        componentDidMount(){
            fetch("http://localhost:3005/valor-total")
                .then(response => response.json())
                .then(data => this.setState( {valor: data.data}))
                .catch(error => console.log(error))

        }

        render(){
            if(this.state.valor == ""){
                <p> Cargando... </p>
            } else {
               <h1> this.state.valor </h1> 
            }

            return (
                <div> {this.state.valor} </div> 
                     
            )
            }
    }

export default ValorTotal;