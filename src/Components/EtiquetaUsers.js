import React from 'react';
import "./app5.css";
import ClientesTotales from './ClientesTotales';

function EtiquetaUsers (){
  return (
    <div className="card border-left-warning shadow h-100 py-2">
    <div className="card-body">
      <div className="row no-gutters align-items-center">
        <div className="col mr-2">
          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1"> Cantidad de usuarios registrados
          </div>
          <div className="h5 mb-0 font-weight-bold text-gray-800"> <ClientesTotales /></div>
        </div>
        <div className="col-auto">
          <i className="fas fa-user-check fa-2x text-gray-300"></i>
        </div>
      </div>
    </div>
  </div>
  )};
  export default EtiquetaUsers;