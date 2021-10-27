import React, { Component } from "react";
import "./app5.css"
import imagen from "https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"

class UltimoClienteFoto extends Component () {
 
  render() { 
    return ( 
        <img src={imagen} alt={"logo"}/> 
    )  
}
}
export default UltimoClienteFoto;