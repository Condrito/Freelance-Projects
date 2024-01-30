import NuestrosProyectosEs from "../Components/NuestrosProyectos/NuestrosProyectosEs";
import { useLanguage } from "../Context/LanguageContext";
import "./Proyectos.css";

const Proyectos = () => {
  const { language } = useLanguage();
  return (
    <>
      {language === "castellano" ? (
        <div className="proyectos-page">
          <NuestrosProyectosEs />
        </div>
      ) : (
        <>
          <div className="proyectos-page"></div>
        </>
      )}
    </>
  );
};

export default Proyectos;
