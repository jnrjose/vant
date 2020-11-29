import React from "react";
import { useWindowSize } from "react-use";
import ReusableHero from "../ReusableHero";
import CircleArrowRight from "../../vectors/circle-arrow-right.svg";
import ActiveLink from "../ActiveLink";
import RightArrow from "../../vectors/arrow-right.svg";

const desktopImages = {
  imageUrl: "url('/ourservicesdesktop.png') top center / cover no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "What We Do",
  message:
    "Through our extensive partner network we at Vantegral Consulting connect and collaborate with key stakeholders in our clients’ businesses to deliver technical, human and organisational transformation.",
  gradient:
    "linear-gradient(90deg, #000000 13.96%, rgba(0, 0, 0, 0.95) 23.82%, rgba(0, 0, 0, 0.8) 35.21%, rgba(0, 0, 0, 0.6) 46.35%, rgba(0, 0, 0, 0.4) 65.21%, rgba(0, 0, 0, 0.3) 84.24%, rgba(46, 46, 56, 0) 100%) left  / contain no-repeat padding-box border-box",
};

const mobileImages = {
  imageUrl: "url('/ourservicesmobile.png') center / cover no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "What We Do",
  message:
    "Through our extensive partner network we at Vantegral Consulting connect and collaborate with key stakeholders in our clients’ businesses to deliver technical, human and organisational transformation.",
  gradient:
    "linear-gradient(90deg, #000000 13.96%, rgba(0, 0, 0, 0.95) 23.82%, rgba(0, 0, 0, 0.8) 35.21%, rgba(0, 0, 0, 0.6) 46.35%, rgba(0, 0, 0, 0.4) 65.21%, rgba(0, 0, 0, 0.3) 84.24%, rgba(46, 46, 56, 0) 100%) top right / cover no-repeat padding-box border-box",
};

const expertisesData = [
  {
    header: "Recruitment and talent acquisition",
    message:
      "At Vantegral Consulting, we believe that recruitment, talent acquisition goes beyond just filling up vacancies.",
    link: "/services/recruitment",
  },
  {
    header: "Training and Development",
    message:
      "We at Vantegral Consulting understand that the most important community and organisational assets are the people.",
    link: "/services/training",
  },
  {
    header: "Outsourcing and Support",
    message:
      "We help to redefine your processes for maximum value actualization.",
    link: "/services/outsourcing",
  },
  {
    header: "Empowerment",
    message:
      "At Vantegral Consulting, we see empowerment as a complex social process whereby people are given the opportunity to grow individual and collective resilience and increased agency over their lives and communities",
    link: "/services/empowerment",
  },
];

const HelpClientPage = () => {
  const { width } = useWindowSize();

  const images = width < "1025" ? mobileImages : desktopImages;
  return (
    <div>
      <ReusableHero image={images} height="54rem" />
      <div className="ourexpertise-container">
        <h4 className="ourexpertise-header">Our Expertise</h4>
        <div className="ourexpertises-wrapper">
          {expertisesData.map((expertiseData, index) => (
            <div className="individual-expertise" key={index}>
              <h5 className="">{expertiseData.header}</h5>
              <p className="expertise-details">{expertiseData.message}</p>
              <div className="expertise-learn">
                <ActiveLink href={`${expertiseData.link}`}>
                  Learn More
                  <div style={{ marginLeft: "1rem" }}>
                    <RightArrow />
                  </div>
                </ActiveLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="next-section">
        <h6>
          Next Section: <span>Insights</span>
        </h6>
        <p>A glimpse into how we think</p>
        <div>
          <ActiveLink href="/insights">
            <CircleArrowRight style={{ width: "100%", height: "100%" }} />
          </ActiveLink>
        </div>
      </div>
      <style jsx>{`
        .ourexpertise-container {
          background-color: var(--primary-black);
          padding: 4.7rem 2.8rem 7.6rem;
        }
        .ourexpertise-header {
          color: var(--primary-white);
          font-size: 2.4rem;
          line-height: 150%;
          text-align: center;
        }
        .individual-expertise {
          margin-top: 7.3rem;
          font-size: 2rem;
          line-height: 150%;
          text-align: center;
        }
        .individual-expertise h5 {
          font-weight: normal;
          color: var(--primary-color);
          margin-bottom: 1.5rem;
        }
        .expertise-details {
          color: var(--contactform-font-color);
          margin-bottom: 1.5rem;
        }
        .expertise-learn {
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .expertise-learn div {
          display: flex;
          align-items: flex-end;
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
          .ourexpertise-container {
            padding: 8.4rem 10.4rem 12.2rem 10rem;
          }
        }
        @media (min-width: 1200px) {
          .ourexpertise-container {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .ourexpertises-wrapper {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-row-gap: 0.6rem;
            grid-column-gap: 17.8rem;
          }
          .individual-expertise {
            text-align: left;
          }
          .expertise-learn {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default HelpClientPage;
