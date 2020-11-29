import React from "react";
import ActiveLink from "./ActiveLink";

const ExpertiseCard = ({ card }) => {
  return (
    <div className="expertisecard-container">
      <h5 className="expertisecard-header">{card.header}</h5>
      <p className="expertisecard-text">
        {card.message}
      </p>

      <div className="expertisecard-link">
      <ActiveLink href={card.link} >
          Learn More
      </ActiveLink>
      </div>
      <style jsx>{`
        .expertisecard-container {
          margin: 1rem 0 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .expertisecard-header {
          font-size: 2rem;
          color: #c0c0c0;
          margin: 3rem auto;
          text-align: center;
        }
        .expertisecard-text {
          font-size: 1.6rem;
          text-align: center;
          color: #ffffff;
          width: 90%;
          margin: 0 auto 1.7rem;
          line-height: 150%;
        }

        .expertisecard-link {
          text-align: center;
          color: #c5c2c2;
          font-size: 1.6rem;
          letter-spacing: 0.1rem;
          text-decoration: underline;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 960px) {
          .expertisecard-container {
            margin: 1rem 1rem 2rem;
          }
          .expertisecard-header {
            margin: 1.2rem auto;
          }
        }
      `}</style>
    </div>
  );
};

export default ExpertiseCard;
