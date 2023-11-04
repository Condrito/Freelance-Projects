import "./App.css";

import { Outlet, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useEffect } from "react";
import { useLanguage } from "./Context/LanguageContext";

const App = () => {
  const location = useLocation();
  const { language } = useLanguage(); // Agrega esta línea

  useEffect(() => {
    const header = document.querySelector(".link-button");
    if (header) {
      if (location.pathname === "/contact") {
        header.classList.add("texto-blanco");
      } else {
        header.classList.remove("texto-blanco");
      }
    }
  }, [location]);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
