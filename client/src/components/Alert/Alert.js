import { useState, useEffect } from "react";
import "./Alert.css";
import { useSelector } from "react-redux";

function Alert({ type, msg }) {
  const [isVisible, setIsVisible] = useState(true);
  const duration = 5000
const handleClose = ()=>{
  setIsVisible(false);

}
  useEffect(() => {
    // Ocultamos el toast después de la duración especificada
    setTimeout(() => {
      setIsVisible(false);
    }, duration);
  }, [duration]);
  
  return (
    <div
      className={`alert___container ${type} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div>
        <span>{type === "success" ? "✔" : "!"}</span> {msg}{" "}
        <span className="alert___close" onClick={handleClose}>
          x
        </span>
      </div>
    </div>
  );
}

export default Alert;
