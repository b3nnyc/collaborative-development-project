import "./RouteLanding.scss";
import chair from "../assets/images/chair.png"

export default function RouteLading() {
  return (
    <section className="section">
      <h2 className="section__heading">Mentorship</h2>
      <div className="container">
        <img className="container__image" src={chair} alt="" />
        <h3>Request or approve mentorship</h3>
        <p>This is where you can become a mentor or find a mentor. You can also view mentors near you.</p>
        <div className="container__buttons">
          <button className="container__button1">Find mentor</button>
          <button className="container__button1">Become mentor</button>
        </div>
      </div>
    </section>
  );
}
