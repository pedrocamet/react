import React from 'react';
import "./app5.css";
import product from '../images/product.svg';
import EtiquetaInicial from './EtiquetaInicial';
import EtiquetaPrecio from './EtiquetaPrecio';
import EtiquetaUsers from './EtiquetaUsers';
import EtCategoria from './EtCategoria';
import MostrarProductos from './MostrarProductos';
import UltimoAuto from './UltimoAuto';

function Content (){
  return (    <div>
     
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
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
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: "25rem"}} src={product} alt="product"/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

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
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
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
