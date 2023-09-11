import { useState, useEffect } from "react";
import "./Alert.css";
import { useSelector } from "react-redux";

function Alert({ type, msg }) {
  const [isVisible, setIsVisible] = useState(true);
  const handleClose = () => {
    setIsVisible(!isVisible);
  };
  const info = useSelector((state) => state.alert);
  useEffect(() => {
    if (info) setIsVisible(!isVisible);
  }, [info, isVisible]);
  console.log(info);
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
