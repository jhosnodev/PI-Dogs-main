import React, { useState } from "react";
import "./Quiz.css";

function Quiz({ quiz, setQuiz }) {
  const [hours, setHours] = useState("");
  const [kids, setKids] = useState("");
  const [pets, setPets] = useState("");
  const [home, setHome] = useState("");
  const [active, setActive] = useState("");
  const [exp, setExp] = useState("");
  const [resource, setResource] = useState("");
  const [love, setLove] = useState("");
  const [training, setTraining] = useState("");
  const [social, setSocial] = useState("");

  return (
    /* onClick={()=> setQuiz(!quiz)} */
    <div className="quiz___main">
      <div className="quiz___cointainer">
        <h3>Descubre que perrito seria tu compañere ideal</h3>
        <form className="quiz___form">
          <div className="page page-1">
            <fieldset>
              <label>
                ¿Cuánto tiempo pasas fuera de casa en un día promedio?
              </label>
              {/* 3 horas 6 horas 8 horas 8+ horas */}
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="hours"
                    value="3h"
                    className="quiz___radio-btn"
                    checked={hours === "3h"}
                    onChange={(event) => setHours(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">🕒</div>
                    <label className="quiz___radio-label">3 horas</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="hours"
                    value="6h"
                    className="quiz___radio-btn"
                    checked={hours === "6h"}
                    onChange={(event) => setHours(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">🕕</div>
                    <label className="quiz___radio-label">6 horas</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="hours"
                    value="8h"
                    className="quiz___radio-btn"
                    checked={hours === "8h"}
                    onChange={(event) => setHours(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">🕗</div>
                    <label className="quiz___radio-label">8 horas</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="hours"
                    value="+8h"
                    className="quiz___radio-btn"
                    checked={hours === "+8h"}
                    onChange={(event) => setHours(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">🕙</div>
                    <label className="quiz___radio-label">+8 Horas</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>¿Tienes niños pequeños en casa?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="kids"
                    value="yes"
                    className="quiz___radio-btn"
                    checked={kids === "yes"}
                    onChange={(event) => setKids(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="kids"
                    value="no"
                    className="quiz___radio-btn"
                    checked={kids === "no"}
                    onChange={(event) => setKids(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="page page-2">
            <fieldset>
              <label>¿Tienes otras mascotas en casa?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="pets"
                    value="si"
                    className="quiz___radio-btn"
                    checked={pets === "yes"}
                    onChange={(event) => setPets(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="pets"
                    value="no"
                    className="quiz___radio-btn"
                    checked={pets === "no"}
                    onChange={(event) => setPets(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>¿Tienes un jardín grande o vive en un apartamento?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="home"
                    value="edif"
                    className="quiz___radio-btn"
                    checked={home === "edif"}
                    onChange={(event) => setHome(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">🏢</div>
                    <label className="quiz___radio-label">Edif</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="home"
                    value="house"
                    className="quiz___radio-btn"
                    checked={home === "house"}
                    onChange={(event) => setHome(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">🏠</div>
                    <label className="quiz___radio-label">Casa</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="page page-3">
            <fieldset>
              <label>¿Eres activo y te gusta hacer ejercicio?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="active"
                    value="yes"
                    className="quiz___radio-btn"
                    checked={active === "si"}
                    onChange={(event) => setActive(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">😎</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="active"
                    value="regular"
                    className="quiz___radio-btn"
                    checked={active === "regular"}
                    onChange={(event) => setActive(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">😬</div>
                    <label className="quiz___radio-label">Algo</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="active"
                    value="no"
                    className="quiz___radio-btn"
                    checked={active === "no"}
                    onChange={(event) => setActive(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">😴</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>¿Tienes experiencia con perros?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="exp"
                    value="si"
                    className="quiz___radio-btn"
                    checked={exp === "si"}
                    onChange={(event) => setExp(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="exp"
                    value="no"
                    className="quiz___radio-btn"
                    checked={exp === "no"}
                    onChange={(event) => setExp(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="page page-4">
            <fieldset>
              <label>
                ¿Tienes un presupuesto para la atención veterinaria y la comida
                para perros?
              </label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="resource"
                    value="si"
                    className="quiz___radio-btn"
                    checked={resource === "si"}
                    onChange={(event) => setResource(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="resource"
                    value="no"
                    className="quiz___radio-btn"
                    checked={resource === "no"}
                    onChange={(event) => setResource(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>¿Eres paciente y cariñoso?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="love"
                    value="si"
                    className="quiz___radio-btn"
                    checked={love === "si"}
                    onChange={(event) => setLove(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="love"
                    value="no"
                    className="quiz___radio-btn"
                    checked={love === "no"}
                    onChange={(event) => setLove(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="page page-5">
            <fieldset>
              <label>¿Estás dispuesto a entrenar a tu perro?</label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="training"
                    value="si"
                    className="quiz___radio-btn"
                    checked={training === "si"}
                    onChange={(event) => setTraining(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="training"
                    value="no"
                    className="quiz___radio-btn"
                    checked={training === "si"}
                    onChange={(event) => setTraining(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <label>
                ¿Estás dispuesto a socializar a tu perro con otras personas y
                animales?
              </label>
              <div className="quiz___radio-tile-container">
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="social"
                    value="si"
                    className="quiz___radio-btn"
                    checked={social === "si"}
                    onChange={(event) => setSocial(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">✅</div>
                    <label className="quiz___radio-label">Si</label>
                  </div>
                </div>
                <div className="quiz___radio-container">
                  <input
                    type="radio"
                    name="social"
                    value="no"
                    className="quiz___radio-btn"
                    checked={social === "no"}
                    onChange={(event) => setSocial(event.target.value)}
                  />
                  <div className="quiz___radio_tile">
                    <div className="quiz___radio-icon">❌</div>
                    <label className="quiz___radio-label">No</label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </form>
        <div className="quiz___wizard-handle">
          <button className="quiz___wizard-btn">1</button>
          <button className="quiz___wizard-btn">2</button>
          <button className="quiz___wizard-btn">3</button>
          <button className="quiz___wizard-btn">4</button>
          <button className="quiz___wizard-btn">5</button>
          <button className="quiz___wizard-next btn___hightlight">
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
