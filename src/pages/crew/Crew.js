import React, { useState } from "react";
import "./style.css";
import crew from "../../helpers/crewList";

const Crew = () => {
  const [cr, setCrew] = useState(crew);
  const [selection, setSelection] = useState(0);

  return (
    <main className="crew-section">
      <div>
        <h5 className="section__title">
          <span className="bold number">02</span> meet your crew
        </h5>
        <div className="container">
          <div className="crew__info">
            <h2 className="crew__status">{cr[selection].status}</h2>
            <p className="crew__name">{cr[selection].name}</p>
            <p className="info__subtitle">{cr[selection].description}</p>
            <ul className="crew__list">
            {cr?.map((item, index) => (
              <button
                className="crew__list-item"
                onClick={() => setSelection(index)}
              >
              
              </button>
            ))}
          </ul>
          </div>
          <img src={cr[selection].img} alt className="crew__image" />
        </div>
      </div>
    </main>
  );
};

export default Crew;
