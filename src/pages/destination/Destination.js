import React, { useState } from "react";
import "./style.css";
import destination from "../../helpers/destinationList";

const Destination = () => {
  const [dest, setDest] = useState(destination);
  const [selection, setSelection] = useState(0);

  return (
    <main className="destination-section">
      <h5 className="section__title barlow-condensed">
        <span className="number">01</span> pick your destination
      </h5>
      <div className="container">
        <img src={dest[selection].img} alt="planet" className="planet__image" />
        <div className="info">
          <ul className="info__list">
            {dest?.map((item, index) => (
              <button
                key={item.id}
                className="info__list-item barlow-condensed"
                onClick={() => setSelection(index)}
              >
                {item.title}
              </button>
            ))}
          </ul>
          <h2 className="info__title bellefair">{dest[selection].title}</h2>
          <p className="info__subtitle barlow">{dest[selection].subtitle}</p>
          <hr className="info__line" />
          <div className="subheading">
            <div className="subheading__distance">
              <h5 className="subheading__title barlow-condensed">
                avg. distance
              </h5>
              <p className="subheading__subtitle bellefair">
                {dest[selection].distance}
              </p>
            </div>
            <div className="subheading__travel-time">
              <h5 className="subheading__title barlow-condensed">
                est. travel time
              </h5>

              <p className="subheading__subtitle bellefair">
                {dest[selection].travelTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
