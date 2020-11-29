import React from "react";
import ExpertiseCard from "./ExpertiseCard";

const expertiseMessage = [
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
];
const Expertise = () => {
  return (
    <div className="expertise-container">
      <h3 className="expertise-header">What We Do</h3>
      <div className="expertisecards-wrapper">
        {expertiseMessage.map((card, index) => (
          <ExpertiseCard key={index} card={card} />
        ))}
      </div>

      <style jsx>{`
        .expertise-container {
          width: 100%;
          min-width: 100%;
          min-height: 100%;
          position: relative;
          padding: 3.8rem 3rem 0 3rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .expertise-container::before {
          content: "";
          opacity: 0.4;
        }
        .expertise-container::after {
          background-color: #000;
          opacity: 0.9;
        }
        .expertise-header {
          color: #fafafa;
          font-size: 3rem;
          margin-bottom: 3rem;
        }
      `}</style>
      <style jsx>
        {`
          @media (min-width: 960px) {
            .expertise-container {
              padding: 3rem 10rem 7rem;
              background: #000;
              opacity: 0.9;
            }
            .expertise-container::before {
              background-image: url("/expertisebg.png");
              background-size: cover;
              content: "";
              display: block;
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -2;
              opacity: 0.4;
            }
            .expertise-container::after {
              background-color: #000;
              content: "";
              display: block;
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              z-index: -1;
              opacity: 0.9;
            }
            .expertise-header {
              margin-bottom: 7rem;
            }
            .expertisecards-wrapper {
              display: flex;
            }
          }
          @media (min-width: 1200px) {
            .expertise-container {
              padding: 5.8rem 13rem 7rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Expertise;
