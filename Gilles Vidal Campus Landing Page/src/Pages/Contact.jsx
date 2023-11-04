import { useLanguage } from "../Context/LanguageContext";
import Contact_CAT from "../Components/Contact/Contact_CAT";
import Contact_ES from "../Components/Contact/Contact_ES";

const Contact = () => {
  const { language } = useLanguage();
  return <h1>hola esto es una prueba</h1>;
};

export default Contact;

/*<>{language === "catalan" ? <Contact_CAT /> : <Contact_ES />}</>;*/
