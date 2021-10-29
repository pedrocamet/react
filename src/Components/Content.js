import React from 'react';
import "./app5.css";

import EtiquetaInicial from './EtiquetaInicial';
import EtiquetaPrecio from './EtiquetaPrecio';
import EtiquetaUsers from './EtiquetaUsers';
import EtCategoria from './EtCategoria';
import MostrarProductos from './MostrarProductos';
import UltimoAuto from './UltimoAuto';

function Content (){
  return (    <div>
     
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800"> Rental Autos Dashboard </h1>
					</div>
  
					<div className="row">

						
						<div className="col-md-4 mb-4">
							<EtiquetaInicial/>
						</div>

						
						<div className="col-md-4 mb-4">
							<EtiquetaPrecio/>
						</div>

						
						<div className="col-md-4 mb-4">
						<EtiquetaUsers/>
						</div>
					</div>

		
					<div className="row">
						
						

						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary"> Listado de productos </h6>
								</div>
								
								<div className="card-body-2">
									<MostrarProductos />
									</div>
									
								
							</div>
						</div>

						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary"> Último auto registrado </h6>
								</div>
								<div className="card-body-2">
									<UltimoAuto />
									
								</div>
							</div>
						</div>


					
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">ULTIMO CLIENTE </h6>
								</div>
								<div className="card-body">
									<div className="row">
										
										<EtCategoria/>								
																				
										
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

  )};
  export default Content;
