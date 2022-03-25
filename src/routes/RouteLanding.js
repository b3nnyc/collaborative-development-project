import "./RouteLanding.scss";
import chair from "../assets/images/chair.png";
import { Link } from "react-router-dom";

export default function RouteLading() {
  return (
    <section className="section">
      <h2 className="section__heading">Mentorship</h2>
      <div className="container">
        <img className="container__image" src={chair} alt="" />
        <h3 className="container__header">Request or approve mentorship</h3>
        <p className="container__copy">
          This is where you can become a mentor or find a mentor. You can also
          view mentors near you.
        </p>
        <div className="container__buttons">
          <Link to="mentors">
            <button className="container__button1">Find mentor</button>
          </Link>
          <button className="container__button2">Become mentor</button>
        </div>
      </div>
      <p className="footer">
        Learn more about
        <a className="footer__link" href="http://google.com">
          mentorship
        </a>
      </p>
    </section>
  );
}
