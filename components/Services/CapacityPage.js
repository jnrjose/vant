import React from "react";
import LeftChevron from "../../vectors/chevron-left.svg";
import ActiveLink from "../ActiveLink";
import CircleArrowRight from "../../vectors/circle-arrow-right.svg";

const capacityData = [
  {
    header: "Talent Sourcing",
    messageOne:
      "We have proven experience sourcing and making placements for our clients while following a systematic process from the point of sourcing until the final stage of placement.",
    messageTwo:
      "Our permanent placing solutions are cost efficient and speedy.",
    imageUrl: "/capacitypics1.png",
  },
  {
    header: "Head Hunting",
    messageOne:
      "At Vantegral Consulting, we understand the advantages that the identification of a quality talent can add to any organization, and at such, we are experienced in sourcing and placing rare senior administrative and technical talents in strategic positions.",
    messageTwo:
      "We have a proven record of accomplishment in filling up difficult positions across various industries.",
    imageUrl: "/capacitypics2.png",
  },
];

const CapacityPage = () => {
  return (
    <div>
      <div className="strategy-container">
        <div className="strategyhero-container">
          <div className="chevron-container">
            <ActiveLink href="/services">
              <LeftChevron />
            </ActiveLink>
          </div>
          <div className="strategyintro-container">
            <h5>Recruitment and Talent Acquisition</h5>
            <p>
              At Vantegral Consulting, we believe that recruitment, talent
              acquisition goes beyond just filling up vacancies, and as such, we
              have developed a team of young and talented experts focused on
              strategically assisting our clients and partners in identifying,
              developing and retaining the best human talent, ultimately
              enhancing their organisational growth.
            </p>
          </div>
          <div className="hero-image">
            <img
              src={"/strategymobile.png"}
              alt="strategy"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <div className="howwehelp-container">
          <h5 className="howwehelp-header">Our recruitment package covers</h5>
          {capacityData.map((data, index) => (
            <div className="howwehelp" key={index}>
              <div className="howwehelp-message-container">
                <h6 className="howwehelp-subheader">{data.header}</h6>
                <p>{data.messageOne}</p>
                <p>{data.messageTwo}</p>
              </div>
              <img src={data.imageUrl} alt="strategy1" />
            </div>
          ))}
        </div>
      </div>
      <div className="next-section">
        <h6>
          Next Section: <span>Training and Development</span>
        </h6>
        <p>A glimpse into how we think</p>

        <div>
          <ActiveLink href="/services/training">
            <CircleArrowRight style={{ width: "100%", height: "100%" }} />
          </ActiveLink>
        </div>
      </div>

      <style jsx>{`
        .strategy-container {
          padding: 7.6rem 2rem 10.9rem;
        }
        .strategyhero-container {
          margin-bottom: 11.4rem;
        }
        .chevron-container {
          text-align: left;
        }
        .strategyintro-container {
          text-align: center;
          margin: 2.2rem 0 5rem;
        }
        .strategyintro-container h5 {
          color: var(--primary-color);
          font-size: 1.8rem;
          line-height: 18px;
          margin-bottom: 2.7rem;
        }
        .strategyintro-container p {
          font-size: 20px;
          line-height: 150%;
          color: var(--contactform-font-color);
        }
        .howwehelp {
          margin-bottom: 7.6rem;
        }
        .howwehelp img {
          width: 100%;
          height: 100%;
        }
        .howwehelp-header {
          font-weight: normal;
          font-size: 20px;
          line-height: 150%;
          color: var(--primary-color);
          text-align: center;
          margin-bottom: 5.2rem;
        }
        .howwehelp-subheader {
          font-size: 1.8rem;
          line-height: 18px;
          color: var(--primary-grey);
          margin-bottom: 3.1rem;
        }
        .howwehelp-message-container p {
          color: var(--contactform-font-color);
          font-size: 2rem;
          line-height: 150%;
        }

        p:nth-child(2) {
          margin-bottom: 2rem;
        }
        p:nth-child(3) {
          margin-bottom: 6.4rem;
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
        @media (min-width: 900px) {
          .strategy-container {
            padding-top: 0rem;
          }
          .strategyhero-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 67rem;
            margin-bottom: 7rem;
            grid-column-gap: 15.9rem;
          }
          .chevron-container,
          .strategyintro-container {
            grid-column: 1;
            grid-row: 1;
            margin-left: 5rem;
          }
          .chevron-container {
            margin-top: 11rem;
            align-self: start;
          }

          .strategyintro-container {
            align-self: center;
          }
          .hero-image {
            grid-column: 2;
            grid-row: 1;
          }
          .strategyintro-container {
            text-align: left;
          }
          .howwehelp img {
            width: 40%;
            height: 45%;
          }
          .howwehelp-container {
            padding: 7.1rem 5rem 5.4rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 10px repeat(2, 1fr);
            grid-column-gap: 5rem;
            grid-row-gap: 6rem;
          }
          .howwehelp-header {
            grid-row: 1;
            grid-column: span 2;
            margin-bottom: 0;
          }
          .howwehelp {
            margin-bottom: 0;
          }
          .howwehelp:nth-child(2) {
            grid-row: 2;
            grid-column: span 2;
            display: flex;
            flex-direction: row-reverse;
          }
          .howwehelp:nth-child(2) .howwehelp-message-container {
            margin-left: 9.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 66.7rem;
          }
          .howwehelp:nth-child(3) {
            grid-row: 3;
            grid-column: span 2;
            display: flex;
          }
          .howwehelp:nth-child(3) .howwehelp-message-container {
            margin-right: 9.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 66.7rem;
          }
        }
        @media (min-width: 1200px) {
          .chevron-container,
          .strategyintro-container {
            grid-column: 1;
            margin-left: 10rem;
          }
          .howwehelp-container {
            padding: 14.1rem 10rem 16.3rem;
            grid-column-gap: 10rem;
            grid-row-gap: 12.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CapacityPage;
