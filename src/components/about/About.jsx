import React from "react";
import background from "../../Images/intro.jpeg";
import "./about.scss";

export default function About() {
    return(
        <div className="about" id="About">
            <div className="image"/>
            <div className="info">
                <h2>Bienvenidos a Rase BarberShop</h2>
                <p>Barbero Franco Escorcia cuenta con más de 10 años de experiencia siendo barbero</p>
                <p>Barbero Johan cuenta con 3 años de experiencia</p>
            </div>
        </div>
    );
}