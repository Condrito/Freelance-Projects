import Inscripcion_CAT from "../Components/Inscripcion/Inscripcion_CAT";
import Inscripcion_ES from "../Components/Inscripcion/Inscripcion_ES";
import { useLanguage } from "../Context/LanguageContext";

const FormularioInscripcion = () => {
  const { language } = useLanguage();
  return (
    <>{language === "catalan" ? <Inscripcion_CAT /> : <Inscripcion_ES />}</>
  );
};

export default FormularioInscripcion;
