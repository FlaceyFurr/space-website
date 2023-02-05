import React, { useState } from "react";
import "./style.css";
import crew from "../../helpers/crewList";

const Crew = () => {
  const [cr, setCrew] = useState(crew);
  const [selection, setSelection] = useState(0);

  return (
    <main className="crew-section">
      <div>
        <h5 className="section__title barlow-condensed">
          <span className="number">02</span> meet your crew
        </h5>
        <div className="container animate__animated animate__fadeIn animate__slow">
          <hr className="crew__line" />
          <div className="crew__info">
            <h3 className="crew__status bellefair">{cr[selection].status}</h3>
            <h2 className="crew__name bellefair">{cr[selection].name}</h2>
            <p className="info__subtitle barlow">{cr[selection].description}</p>
            <ul className="crew__list">
              {cr?.map((item, index) => (
                <button
                  key={item.id}
                  className="crew__list-item"
                  onClick={() => setSelection(index)}
                ></button>
              ))}
            </ul>
          </div>
          <img
            src={cr[selection].img}
            alt="crew portrait"
            className="crew__image"
          />
        </div>
      </div>
    </main>
  );
};

export default Crew;
