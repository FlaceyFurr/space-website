import "./style.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home-section">
      <div className="container">
        <div className="home__text">
          <h5 className="home__text-subheading barlow-condensed">so, you want to travel to</h5>
          <h1 className="home__text-title bellefair">space</h1>
          <p className="info__subtitle barlow">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give ou a truly out of this
            world experience!
          </p>
        </div>
        <NavLink to="/destination" className="button-link bellefair">
          Explore
        </NavLink>
      </div>
    </main>
  );
};

export default Home;
