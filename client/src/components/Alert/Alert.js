import { useState, useEffect } from "react";
import "./Alert.css";

function Alert({ type, msg }) {
  const [isVisible, setIsVisible] = useState(true);




  return (
    <div className={`alert___container ${type} ${isVisible ? 'visible' : 'hidden' }`}>
      <div>
        <span className="alert___close">x</span>
        <span>{type === "success" ? "✔" : "!"}</span>
        {msg}
      </div>
    </div>
  );
}

export default Alert;
