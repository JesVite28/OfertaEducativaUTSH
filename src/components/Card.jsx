import React from "react";
import "./../styles/Card.css";

function Card({ imagen, nombre, descripcion }) {
  return (
    <>
      <div className="card cards">
        <img src={imagen} className="card-img-top imagen" alt="..."></img>
        <div className="card-body">
          <div className="card-title">
            <h5 className="card-title">{nombre}</h5>
          </div>
          <div className="card-text">
            <a href="#" className="btn btn-success">
              Más información
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
