import React from "react";
import minoxidil from "../../Images/Minoxidil.jpeg";
import ceras from "../../Images/Ceras.jpeg";
import "./products.scss";
export default function Products() {
  return (
    <div className="products" id="Products">
        <div className="card">
            <div className="container">
                <img src={minoxidil} alt="Minoxidil"/>
            </div>
            <div className="details">
                <h3>Minoxidil</h3>
                <p></p>
            </div>
        </div>
        <div className="card">
            <div className="container">
                <img src={ceras} alt="Ceras"/>
            </div>
            <div className="details">
                <h3>Ceras</h3>
                <p></p>
            </div>
        </div>
    </div>
  );
}
