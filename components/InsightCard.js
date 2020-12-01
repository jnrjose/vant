import React from "react";
import ActiveLink from "./ActiveLink";

const InsightCard = ({ image }) => {
  return (
    <div className="insightcard-container card">
      <img src={image.imageUrl} alt="card" className="insightcard-image" />

      <div className="insightcard-details-wrapper">
        <h5 className="insightcard-details-header">{image.title}</h5>
        {/*<p className="insightcard-details-date">May 20, 2020</p>*/}
        <p className="insightcard-details-text">{image.message}</p>
        <ActiveLink href={`${image.link}`} fontsize="1.4rem">
          Learn more ...
        </ActiveLink>
      </div>
      <style jsx>{`
        .insightcard-container {
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
          border-radius: 6px 6px 0px 0px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-top: 2.5rem;
          overflow: hidden;
          background-color: #fff;
        }
        .insightcard-image {
          object-fit: cover;
          max-width: 100%;
          max-height: 100%;
          display: block;
        }
        .insightcard-details-wrapper {
          background-color: #2e2e38;
          padding: 3.3rem 3rem 4rem 4rem;
          display: flex;
          flex-direction: column;
        }
        .insightcard-details-header {
          color: #fffa46;
          font-size: 1.8rem;
          margin-bottom: 0.7rem;
        }
        .insightcard-details-date {
          color: #c0c0c0;
          font-size: 1rem;
          margin-bottom: 1.1rem;
        }
        .insightcard-details-text {
          font-size: 1.4rem;
          color: #c3c3c3;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 620px) {
          .insightcard-container {
            width: 60%;
            margin: 2.5rem auto 0;
          }

          .insightcard-details-wrapper {
            height: 100%;
            padding: 2rem 3rem;
          }
        }
        @media (min-width: 960px) {
          .insightcard-container {
            flex-direction: row;
            width: 100%;
            height: 18rem;
            margin-top: 0;
            margin-bottom: 1.2rem;
          }
          .insightcard-image {
            width: 40%;
          }
          .insightcard-details-wrapper {
            height: 100%;
            padding: 3.3rem 3rem 4rem 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default InsightCard;
