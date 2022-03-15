import React from "react";
import "./intro.scss";
import { PopupButton } from "react-calendly";

export default function intro() {
  return (
    <div className="intro" id="Intro">
      <div className="wrapper">
        <div className="center">
          ¡En Rase Barber Shop rescatamos el arte de barberia clasica moderna!
        </div>
        <PopupButton
          className="center"
          iframeTitle="Calendly Scheduling Page"
          pageSettings={{
            backgroundColor: 'ffffff',
            hideEventTypeDetails: false,
            hideGdprBanner: true,
            hideLandingPageDetails: false,
            primaryColor: '00a2ff',
            textColor: '4d5055'
          }}
          rootElement={document.getElementById("root")}
          styles={{
              background:"black",
              color:"white",
              top: "60%",
              borderRadius: "12px"
          }}
          text="Agenda una cita"
          url="https://calendly.com/daniel-barrientos-araya/revision-del-proyecto-1-programacion-iii"
        />
      </div>
    </div>
  );
}