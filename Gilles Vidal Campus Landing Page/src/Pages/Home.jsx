import "./Home.css";
import { useLanguage } from "../Context/LanguageContext";
import Hero_CAT from "../Components/Hero/Hero_CAT";
import Hero_ES from "../Components/Hero/Hero_ES";
import Campus_CAT from "../Components/Campus/Campus_CAT";
import Campus_ES from "../Components/Campus/Campus_ES";
import Gilles_CAT from "../Components/Gilles/Gilles_CAT";
import Gilles_Es from "../Components/Gilles/Gilles_Es";
import Enfoque_CAT from "../Components/Enfoque/Enfoque_CAT";
import Planificacion_CAT from "../Components/Planificacion/Planificacion_CAT";
import Inscribete_CAT from "../Components/Inscribete/Inscribete_CAT";
import Enfoque_ES from "../Components/Enfoque/Enfoque_ES";
import Planificacion_ES from "../Components/Planificacion/Planificacion_ES";
import Inscribete_ES from "../Components/Inscribete/Inscribete_ES";

const Home = () => {
  const { language } = useLanguage();

  return (
    <>
      {language === "catalan" ? (
        <>
          {" "}
          <div className="home-page">
            <Hero_CAT />
            <Campus_CAT />
            <Gilles_CAT />

            <div className="enfoque-planificacion-content">
              <Enfoque_CAT />
              <Planificacion_CAT />
            </div>
            <Inscribete_CAT />
          </div>
        </>
      ) : (
        <>
          <div className="home-page">
            <Hero_ES />
            <Campus_ES />
            <Gilles_Es />
            <div className="enfoque-planificacion-content">
              <Enfoque_ES />
              <Planificacion_ES />
            </div>
            <Inscribete_ES />
          </div>
        </>
      )}
    </>
  );
};

export default Home;
