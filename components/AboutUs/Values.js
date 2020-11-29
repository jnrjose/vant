import React from "react";
import { useWindowSize } from "react-use";
import ReusableHero from "../ReusableHero";
import CircleArrowRight from "../../vectors/circle-arrow-right.svg";
import ActiveLink from "../ActiveLink";
import ValueImage from "../../vectors/valuesImage.svg";
import ValueSlider from "../ValueSlider";

const missions = [
  {
    header: "Vision",
    message:
      "To enhance economic and social growth through capacity development, and to provide solutions that enables our clients and partners scale new heights.",
  },
  {
    header: "Mission",
    message:
      "To become the leading provider of capacity development services, while exceeding our clients’ expectations through superior service delivery.",
  },
];

const desktopImages = {
  imageUrl: "url('/valueshero.png') left center / cover no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "Growing by Our Values",
  message:
    "Our formula for constantly attaining success is a combination of our values, ethical behavior, and knowledge base.",
  gradient:
    "linear-gradient(linear-gradient(90deg, #000000 13.96%, rgba(0, 0, 0, 0.95) 23.82%, rgba(0, 0, 0, 0.8) 35.21%, rgba(0, 0, 0, 0.6) 46.35%, rgba(0, 0, 0, 0.4) 65.21%, rgba(0, 0, 0, 0.3) 84.24%, rgba(46, 46, 56, 0) 100%)) left  / contain no-repeat padding-box border-box",
};

const mobileImages = {
  imageUrl: "url('/valueshero.png') center / contain no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "Growing by Our Values",
  message:
    "Our formula for constantly attaining success is a combination of our values, ethical behavior, and knowledge base.",
  gradient:
    "linear-gradient(rgba(6,7,8, 0.4), rgba(6,7,8, 0.4)) top right / cover no-repeat padding-box border-box",
};

const ValuesPage = () => {
  const { width } = useWindowSize();

  const images = width < "1025" ? mobileImages : desktopImages;

  return (
    <section className="values-container">
      <ReusableHero image={images} />
      <div className="values-content">
        <p className="values-text">
          At Vantegral Consulting, our values drive our achievements. It is what
          makes us different and sets us apart from the rest. It is what defines
          what we support and stand for, and also who we are. Our values guide
          our work ethics, deliverables, countenance, accountability, and more.
          It is what makes us excel in our niche.
          <span>
            Our values drive our purpose and quest for success. It has allowed
            us to build trust with our clients and the community.
          </span>
        </p>
        <div className="valueimage-container">
          <ValueImage style={{ width: "100%", height: "100%" }} />
        </div>
        <div className="vision-container">
          {missions.map((mission, index) => (
            <div key={index}>
              <h6>{mission.header}</h6>
              <p>{mission.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="valueslanguage-container">
        <p className="valueslanguage-header">
          The Vantegral Values: Our Common Language
        </p>
        <p className="valueslanguage-message">
          Our core values at Vantegral Consulting is the daily guide we follow
          for success actualization. Our culture is entrenched in every action
          and decision made by our team.
        </p>
        <ValueSlider />
      </div>
      <div className="next-section">
        <h6>
          Next Section: <span>People</span>
        </h6>
        <p>Vantegral’s Leadership</p>
        <div>
          <ActiveLink href="/aboutus/people">
            <CircleArrowRight style={{ width: "100%", height: "100%" }} />
          </ActiveLink>
        </div>
      </div>
      <style jsx>{`
        .values-content {
          padding: 7.9rem 3.4rem 0.4rem;
          background-color: var(--primary-black);
        }
        .values-text {
          font-size: 2rem;
          line-height: 120%;
          color: var(--contactform-font-color);
        }
        .values-text span {
          display: block;
          margin-top: 2rem;
        }
        .valueimage-container {
          margin-top: 10.9rem;
        }
        .vision-container {
          margin-top: 5.1rem;
        }
        .vision-container h6 {
          color: var(--primary-color);
          font-size: 2.4rem;
          line-height: 150%;
          margin-bottom: 1.5rem;
        }
        .vision-container div {
          margin-bottom: 5.7rem;
        }

        .vision-container p {
          font-size: 2rem;
          line-height: 150%;
          color: var(--contactform-font-color);
        }
        .valueslanguage-container {
          padding: 7.5rem 2rem 3.5rem;
          background-color: var(--primary-white);
        }
        .valueslanguage-message {
          color: var(--primary-black);
          font-size: 1.6rem;
          text-align: center;
          line-height: 150%;
          margin: 2.9rem 0rem 7.5rem;
        }
        .valueslanguage-header {
          text-align: center;
          color: var(--primary-black);
          line-height: 150%;
          font-size: 2.4rem;
          margin: 0 auto;
          width: 26rem;
        }
        .next-section {
          display: flex;
          flex-direction: column;
          padding: 3.8rem 2.7rem;
          background-color: var(--primary-color);
          align-items: center;
        }
        .next-section h6 {
          color: #4f4f4f;
          font-size: 1.6rem;
          line-height: 130%;
        }
        .next-section h6 span {
          font-weight: 800;
          color: #333333;
        }
        .next-section p {
          font-size: 24px;
          line-height: 130%;
          color: #333333;
          margin: 1.6rem 0rem 2.2rem;
          font-weight: 500;
        }
        .next-section div {
          width: 4rem;
          height: 4rem;
        }
        .next-section div svg {
          width: 100%;
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1024px) {
          .next-section {
            font-size: 2rem;
            padding: 3.7rem 0rem 3rem;
          }
          .next-section p {
            font-size: 3rem;
            margin: 1.1rem 0 1.4rem;
          }

          .values-content {
            display: grid;
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 40% 60%;
            grid-column-gap: 2.7rem;
            padding: 3.2rem 2.5rem 0rem;
          }
          .values-text {
            grid-column: 1;
            grid-row: 1;
            width: 57rem;
          }
          .values-text span {
            margin-top: 3rem;
          }
          .valueimage-container {
            grid-column: 2;
            grid-row: span 2;
            margin-top: 0rem;
          }
          .vision-container {
            grid-column: 1;
            grid-row: 2;
            width: 58rem;
            margin-top: 0rem;
            margin-bottom: 14.6rem;
          }
          .valueslanguage-container {
            padding: 7.9rem 5.2rem 4.1rem;
          }
          .valueslanguage-message {
            margin: 1.8rem auto 5.6rem;
          }
          .valueslanguage-header {
            font-size: 3rem;
            width: 100%;
          }
        }
        @media (min-width: 1200px) {
          .values-content {
            grid-template-columns: 50% 1fr;
            padding: 10.2rem 7.1rem 0rem 9.5rem;
            grid-column-gap: 8.7rem;
          }
          .valueslanguage-message {
            width: 79.2rem;
          }
          .valueslanguage-container {
            padding: 7.9rem 16.2rem 4.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ValuesPage;
