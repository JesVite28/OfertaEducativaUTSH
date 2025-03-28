import React from "react";
import Imagen1 from './../assets/slider3.png';
import Imagen2 from './../assets/slider2.jpg';
import Imagen3 from './../assets/slider1.png'
import "./../styles/Carrusel.css";

function Carrusel() {
    return (
        <>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Imagen1} className="d-block w-100 image" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagen2} className="d-block w-100 image" alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src={Imagen3} className="d-block w-100 image" alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default Carrusel;