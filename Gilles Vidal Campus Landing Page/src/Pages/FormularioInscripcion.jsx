import Inscripcion_CAT from "../Components/Inscripcion/Inscripcion_CAT";
import Inscripcion_ES from "../Components/Inscripcion/Inscripcion_ES";
import { useLanguage } from "../Context/LanguageContext";

const FormularioInscripcion = () => {
  const { language } = useLanguage();
  return <h1>hola esto es una prueba</h1>;
};

export default FormularioInscripcion;
/*<>{language === "catalan" ? <Inscripcion_CAT /> : <Inscripcion_ES />}</>*/
