import React from "react";
import "./intro.scss";
import background_intro from "../../Images/intro.jpeg";
export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="bg-image">
        <img src={background_intro} alt="" className="img" />

        <div className="mask">
          <div className="text">
            <p>
            En Rase barber shop rescatamos el arte de barberia clasica moderna
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
