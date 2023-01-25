import "./style.css";
import moon from "./../../images/destination/image-moon.png";

const Destination = () => {
  return (
    <main className="destination-section">
      <h5 className="destination__title">
        <span className="bold number">01</span> pick your destination
      </h5>
      <div className="container">
        <img src={moon} alt="moon" className="image" />
        <div className="info">
          <ul className="info__list">
            <li className="info__list-item">moon</li>
            <li className="info__list-item">mars</li>
            <li className="info__list-item">europa</li>
            <li className="info__list-item">titan</li>
          </ul>
          <h2 className="info__title">Moon</h2>
          <p className="info__subtitle">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr className="info__line" />
          <div className="subheading">
            <h5 className="subheading__title">avg. distance</h5>
            <h5 className="subheading__title">est. travel time</h5>
            <p className="subheading__subtitle">384,000 km</p>
            <p className="subheading__subtitle">3 days</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Destination;
