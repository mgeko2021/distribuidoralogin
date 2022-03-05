import React from "react";
import Information from "./HomePage/Information";
import NavigationBar from "./HomePage/NavigationBar";
import img from "./img2.jpg";
import "../Styles/Nosotros.css";
import Footer from "./Footer";




const Nosotros = () => {
  return (
    <div className="Nosotros">
      <Information />
      <div
        className="BannerImg2 "
        style={{ backgroundImage: `url(${img})`, backgroundSize:"cover", backgroundPosition:"center", padding:"0.4rem 0 5rem"}}
      >
        <NavigationBar />
        <div className="NosotrosRoute row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
          <h2>Misión | Visión</h2>
          <p>Inicio {`>`} Nosotros</p>
        </div>
      </div>
      <div className="NosotrosMisionVision row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
        <div className="NosotrosVision row col-12">
          <div className="col-3 mx-auto">
            <img src="images/mision.png" alt="" />
          </div>
          <div className="col-11 col-md-8 mx-auto">
            <h3>Visión</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              ipsum distinctio, quasi exercitationem quas natus sequi minus
              iusto dolore doloremque dolor atque enim non sapiente debitis
              fugiat obcaecati! Accusantium, dolore. Rerum dolore molestiae
              ipsum harum repellendus praesentium sunt architecto asperiores ex
              quia delectus, quos minima ducimus iure ab deserunt fuga, corporis
            </p>
          </div>
        </div>
        <div className="NosotrosMision row col-12 ">
          <div className="col-3 mx-auto">
            <img src="images/mision.png" alt="" />
          </div>
          <div className="col-11 col-md-8 mx-auto">
            <h3>Misión</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              ipsum distinctio, quasi exercitationem quas natus sequi minus
              iusto dolore doloremque dolor atque enim non sapiente debitis
              fugiat obcaecati! Accusantium, dolore. Rerum dolore molestiae
              ipsum harum repellendus praesentium sunt architecto asperiores ex
              quia delectus, quos minima ducimus iure ab deserunt fuga, corporis
            </p>
          </div>
        </div>
      </div>
      <div className="Historia">
        <div className="row col-md-11 col-lg-10 col-xl-8 mx-auto p-0">
          <h3>Historia</h3>
          <p>
          El 17 de noviembre de 1999 se fundo la compañía Distribuidora Negociemos, comercializadora de insumos farmacéuticos para la ciudad de Cali, con el apoyo de droguerías las cuales nos dieron su apoyo en nuestros inicios sin las cuales no abría sido posible nuestro propósito como empresa, y siempre con el apoyo de nuestra fe, una fe en DIOS, que nos a abierto las puertas y ha permitido que todo sea posible.   
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Nosotros;
