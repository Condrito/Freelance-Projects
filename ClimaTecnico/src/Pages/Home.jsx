import DescripcionCat from "../Components/Descripcion/DescripcionCat";
import DescripcionES from "../Components/Descripcion/DescripcionES";
import FormularioCat from "../Components/Formulario/FormularioCat";
import FormularioEs from "../Components/Formulario/FormularioEs";
import HeroCat from "../Components/Hero/HeroCat";
import HeroES from "../Components/Hero/HeroES";
import ServiciosCat from "../Components/Servicios/ServiciosCat";
import ServiciosES from "../Components/Servicios/ServiciosES";
import ValoresCat from "../Components/Valores/ValoresCat";
import ValoresEs from "../Components/Valores/ValoresEs";

import { useLanguage } from "../Context/LanguageContext";
import "./Home.css";

const Home = () => {
  const { language } = useLanguage();

  return (
    <>
      {language === "castellano" ? (
        <div className="home">
          <HeroES />
          <DescripcionES />
          <ValoresEs />
          <ServiciosES />
          <FormularioEs />
        </div>
      ) : (
        <>
          <div className="home">
            <HeroCat />
            <DescripcionCat />
            <ValoresCat />
            <ServiciosCat />
            <FormularioCat />
          </div>
        </>
      )}
    </>
  );
};
export default Home;
