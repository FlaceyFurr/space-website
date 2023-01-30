import { useState } from "react";
import "./style.css";
import technology from "../../helpers/technologyList";

const Technology = () => {
  const [tech, setTechnology] = useState(technology);
  const [selection, setSelection] = useState(0);

  return (
    <main className="technology-section">
      <h5 className="section__title">
        <span className="bold number">03</span> space launch 101
      </h5>
      <div className="container">
        <div className="technology">
          <div className="technology__info">
            <h5 className="technology__preface">the terminology...</h5>
            <h2 className="technology__title">{tech[selection].title}</h2>
            <p className="technology__subtitle">{tech[selection].subtitle}</p>
          </div>
          <ul className="technology__list">
            {tech?.map((item, index) => (
              <button key={item.id}
                className="technology__item"
                onClick={() => setSelection(index)}
              >{index + 1}</button>
            ))}
          </ul>
        </div>
      </div>
      <img
        src={tech[selection].img}
        alt="technology"
        className="technology__img"
      />
    </main>
  );
};

export default Technology;
