import React from "react";
import Information from "./HomePage/Information";
import NavigationBar from "./HomePage/NavigationBar";
import img from "./bg-main.jpg";
import "../Styles/Nosotros.css";
import Footer from "./Footer";




const Nosotros = () => {
  return (
    <div className="Nosotros">
      <Information />
      <div
        className="BannerImg pt-3 pb-3"
        style={{ backgroundImage: `url(${img})` }}
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            repellendus quae ipsa a illo! Doloremque, id commodi. Ullam
            voluptatem adipisci neque, et nihil, eligendi amet minima
            accusantium atque autem odio. Cupiditate unde, rerum provident omnis
            explicabo animi illo dignissimos aliquam sunt necessitatibus
            adipisci et aspernatur facere ipsum corrupti quis odio delectus eius
            explicabo animi illo dignissimos aliquam sunt necessitatibus
            adipisci et aspernatur facere ipsum corrupti quis odio delectus eius
            explicabo animi illo dignissimos aliquam sunt necessitatibus
            adipisci et aspernatur facere ipsum corrupti quis odio delectus eius
   
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Nosotros;
