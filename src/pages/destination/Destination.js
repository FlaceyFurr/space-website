import React, { useState } from "react";
import "./style.css";
import destination from "../../helpers/destinationList";

const Destination = () => {
  const [dest, setDest] = useState(destination);
  const [selection, setSelection] = useState(0);

  return (
    <main className="destination-section">
      <h5 className="destination__title">
        <span className="bold number">01</span> pick your destination
      </h5>
      <div className="container">
        <img src={dest[selection].img} alt="moon" className="image" />
        <div className="info">
          <ul className="info__list">
            {dest?.map((item, index) => (
              <button onClick={() => setSelection(index)}>{item.title}</button>
            ))}
          </ul>
          <h2 className="info__title">{dest[selection].title}</h2>
          <p className="info__subtitle">{dest[selection].subtitle}</p>
          <hr className="info__line" />
          <div className="subheading">
            <h5 className="subheading__title">avg. distance</h5>
            <h5 className="subheading__title">est. travel time</h5>
            <p className="subheading__subtitle">{dest[selection].distance}</p>
            <p className="subheading__subtitle">{dest[selection].travelTime}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
