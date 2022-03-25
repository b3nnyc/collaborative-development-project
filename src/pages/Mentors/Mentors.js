import "./Mentors.scss";
import { Link } from "react-router-dom";

export default function RouteMentors() {
  return (
    <section className="section">
      <h2 className="section__heading">Mentorship</h2>
      <div className="container">
        <h3 className="container__heading">
          Based on the initial onboarding, these are the mentors we recommend:
        </h3>

        <div className="mentors">
          <div className="mentors__box">
            <div className="mentors__image background-image-orange">
              <h3 className="mentors__image-text ">OE</h3>
            </div>
            <div className="mentors__description">
              <p className="mentors__description-text">
                Oscar has owned a clothing shop for 20 years and has been using
                Shopify for last 2 years, they decided to make the switch during
                the pandemic
              </p>
              <p className="mentors__description-text">
                <span className="mentors__description-text--bold">
                  Languages(s):
                </span>
                Spanish, English
              </p>
            </div>
          </div>
          <div className="divider"></div>

          <div className="mentors__box">
            <div className="mentors__image background-image-coral">
              <h3 className="mentors__image-text">JB</h3>
            </div>
            <div className="mentors__description">
              <p className="mentors__description-text">
                Judit has owned a clothing shop for 10 years, and has been using
                Shopify for the last 5 years; they have made over 10,000 sales.
              </p>
              <p className="mentors__description-text">
                <span className="mentors__description-text--bold">
                  Languages(s):
                </span>
                Spanish
              </p>
            </div>
          </div>
          <div className="divider"></div>

          <div className="mentors__box">
            <div className="mentors__image background-image-green">
              <h3 className="mentors__image-text">TZ</h3>
            </div>
            <div className="mentors__description">
              <p className="mentors__description-text">
                Thomaz has owned a clothing shop for 8 years, and has been using
                Shopify for last 5 years. They love matching people with
                product.
              </p>
              <p className="mentors__description-text">
                <span className="mentors__description-text--bold">
                  Languages(s):
                </span>
                Spanish, English
              </p>
            </div>
          </div>
          <div className="divider"></div>

          <Link className="mentors__link" to="hernando">
            <div className="mentors__box">
              <div className="mentors__image background-image-blue">
                <h3 className="mentors__image-text">HD</h3>
              </div>
              <div className="mentors__description">
                <p className="mentors__description-text">
                  Hernando has owned a clothing shop for 2 years, and started
                  out using Shopify. They are a huge advocate of Shopify!
                </p>
                <p className="mentors__description-text">
                  <span className="mentors__description-text--bold">
                    Languages(s):
                  </span>
                  Spanish, English
                </p>
              </div>
            </div>
          </Link>

          <div className="divider"></div>

          <div className="mentors__box">
            <div className="mentors__image background-image-red">
              <h3 className="mentors__image-text">RS</h3>
            </div>
            <div className="mentors__description">
              <p className="mentors__description-text">
                Raphael has owned a clothing shop for 15 years, and has been
                using Shopify for last 3 years. They love how accessible the
                product is.
              </p>
              <p className="mentors__description-text">
                <span className="mentors__description-text--bold">
                  Languages(s):
                </span>
                Spanish, English
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
