import React from "react";
import "./products.scss";
import minoxidil from "../../Images/Minoxidil.jpeg";
export default function Products() {
	//recomiendo hacer un componente Product donde se renderiza cada card
	//ademas de crear un const productos=[ producto1, producto2]
	//en lugar de hacer un mero html con cada uno de los productos
	//si no me avisa y nos reunimos
  return (
    <div className="products" id="Products">
      <section className="card-area">
        <section className="card-section">
          <div className="card">
            <div className="card-back">
              <h2 className>Minoxidil</h2>
              <p className>pal pelo xd</p>
            </div>
            <div className="flip-card">
              <div className="flip-card__container">
                <div className="card-front">
                  <div className="card-front__tp card-front__tp--P">
                    <h2 className="card-front__heading">Minoxidil</h2>
                    <p className="card-front__text-price">Precio</p>
                  </div>
                  <div className="card-front__bt">
                    <p className="card-front__text-view card-front__text-view--P">
                      Ver Detalle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="inside-page">
              <div className="img__container">
                <img src={minoxidil} alt="" className="img" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
