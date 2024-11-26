import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [bottomPosition, setBottomPosition] = useState(800); // Posição inicial
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para exibir o botão
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
        setBottomPosition(18); // Define a posição de bottom quando ativo
      } else {
        setIsVisible(false);
        setBottomPosition(800); // Retorna à posição inicial quando não ativo
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Função para rolar até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      onClick={scrollToTop}
      style={{
        ...scrollTopStyles,
        bottom: `${bottomPosition}px`,
        ...(isVisible ? scrollTopActiveStyles : {}),
      }}
    >
      <FontAwesomeIcon icon="fa-solid fa-chevron-up" />
    </div>
  );
};
const scrollTopStyles = {
  outline: "none",
  border: "0",
  background: "#8161ffb9",
  width: "50px",
  height: "50px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  right: "20px",
  zIndex: "10",
  boxShadow: "0 1px 6px 2px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.7)",
  cursor: "pointer",
  opacity: "0",
  visibility: "hidden",
  transition: "all .8s ease-in-out",
};
const scrollTopActiveStyles = {
  opacity: "1",
  visibility: "visible",
  color: "white",
  fontSize: "1.5rem",
};

export default ScrollTopButton;
