import React from "react";
import { useWindowSize } from "react-use";
import ReusableHero from "./ReusableHero";
import Carrer from "../vectors/carrers.svg";
import Hospital from "../vectors/hospital.svg";
import Button from "./Button";

const desktopImages = {
  imageUrl: "url('/carrerhero.png') top center / cover no-repeat",
  top: "0px",
  right: "190px",
  width: "90%",
  height: " 100%",
  backgroundSize: "100%",
  header: "Work With Us",
  message:
    "Join a community that will make an impact and change your meaning of purposeful work.",
  gradient:
    "linear-gradient(90deg, rgba(6,7,8,1) 10%, rgba(0,0,0,0) 40%) left  / contain no-repeat padding-box border-box",
};

const mobileImages = {
  imageUrl: "url('/carrerhero.png') center / cover no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "Work With Us",
  message:
    "Join a community that will make an impact and change your meaning of purposeful work.",
  gradient:
    "linear-gradient(rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)) top right / cover no-repeat padding-box border-box",
};

const positionsData = [
  {
    position: "Product Manager",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut enim, ultricies massa porttitor mollis nullam faucibus. Suspendisse a sit tortor adipiscing euismod leo, sed. Ullamcorper faucibus elementum quisque dui leo viverra diam. At leo molestie vitae enim.",
  },
  {
    position: "HR Specialist",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut enim, ultricies massa porttitor mollis nullam faucibus. Suspendisse a sit tortor adipiscing euismod leo, sed. Ullamcorper faucibus elementum quisque dui leo viverra diam. At leo molestie vitae enim.",
  },
];

const benefitsData = [
  {
    benefit: "Competitive Pay",
    summary:
      "Our salaries are directly aligned with the current industry standard. Bonuses and raises are added compensations offered as well.",
  },
  {
    benefit: "Health Insurance",
    summary:
      "Maintaining a healthy workforce is our priority. We provide quality healthcare services to all staff members.",
  },
  {
    benefit: "Continous Development",
    summary:
      "We are about social, mental, and intellectual growth. We create avenues and resources for continuous development.",
  },
  {
    benefit: "Exciting Team",
    summary:
      "Our team comprises fun, relatable, and hardworking individuals. We work hard, but we also play hard. There is no dull moment.",
  },
  {
    benefit: "Growth Opportunities",
    summary:
      "From promotions to rewards, Vantegral offers multiple opportunities for career growth.",
  },
  {
    benefit: "Worktools",
    summary:
      "On resumption, all new employees receive a new laptop for work, as well as other essential work tools.",
  },
];

const CarrersPage = () => {
  const { width } = useWindowSize();

  const images = width < "1025" ? mobileImages : desktopImages;
  return (
    <div className="carrer-container">
      <ReusableHero image={images} />
      <div className="carrerdetail-container">
        <div className="were-container">
          <div className="carrer-image">
            <Carrer style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="were-details">
            <p className="were-details-header">We’re.......</p>
            <p className="were-details-message">
              A consulting firm that strongly believes that the growth of its
              people is directly equivalent to the success of the company. Our
              workforce is the heart and backbone of our existence. We believe
              that with the right team, on the same path, and the same mindset,
              we can achieve anything.
            </p>
          </div>
          <div className="benefits-container">
            <h5 className="benefits-header">Benefits</h5>
            <div className="benefitscard-container">
              {benefitsData.map((benefitData, index) => (
                <div className="benefitscard" key={index}>
                  <div className="benefits-icon">
                    <Hospital />
                  </div>
                  <h5 className="benefitscard-header">{benefitData.benefit}</h5>
                  <p className="benefitscard-details">{benefitData.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="position-container">
        <h6 className="position-header">Opening Positions</h6>
        {positionsData.map((positionData, index) => (
          <div className="positioncard-container" key={index}>
            <h6 className="positioncard-header">{positionData.position}</h6>
            <p className="positioncard-details">{positionData.summary}</p>
            <span>Lagos, Nigeria . Fulltime</span>
            <div className="apply-button">
              <Button
                message="Apply"
                fontSize="1.2rem"
                width="14.9rem"
                height="4rem"
                color="var(--primary-black)"
                bgcolor="var(--primary-color)"
              />
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .carrerdetail-container {
          padding: 5.7rem 2.5rem 2.6rem;
          color: var(--main-bg-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .were-container {
          display: grid;
          grid-auto-columns: 1fr;
        }
        .carrer-image {
          margin: 0rem 0.9rem 10.1rem;
        }
        .were-details-header {
          font-size: 1.8rem;
          line-height: 18px;
          color: var(--primary-grey);
          margin-bottom: 3.1rem;
          font-weight: 500;
        }
        .were-details-message {
          color: var(--contactform-font-color);
          font-size: 2rem;
          line-height: 150%;
          margin-bottom: 7.5rem;
        }
        .benefits-header {
          font-weight: 500;
          font-size: 2.8rem;
          line-height: 18px;
          color: var(--primary-grey);
          margin-bottom: 1.3rem;
        }
        .benefitscard {
          background-color: var(--primary-white);
          border-radius: 3px;
          padding: 3.4rem 3.2rem 3.8rem 4.2rem;
          margin-top: 4.4rem;
        }
        .benefits-icon {
          background-color: var(--primary-black);
          width: 4.4rem;
          height: 4.4rem;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 3.7rem;
        }
        .benefitscard-header {
          font-size: 1.8rem;
          font-weight: 500;
          line-height: 1.8rem;
          margin-bottom: 2.6rem;
        }
        .benefitscard-details {
          line-height: 150%;
          font-size: 1.6rem;
          color: var(--primary-black);
        }
        .position-container {
          background-color: #e5e5e5;
          padding: 6.9rem 2.5rem 13.8rem;
        }
        .position-header {
          font-size: 2.8rem;
          font-weight: 500;
          line-height: 18px;
          color: var(--primary-black);
          text-align: center;
          margin-bottom: 0.7rem;
        }
        .positioncard-container {
          padding: 5.6rem 4.7rem 4.2rem 4.2rem;
          background: var(--primary-white);
          margin-top: 3.4rem;
        }
        .positioncard-container span {
          display: inline-block;
          font-size: 1.4rem;
          color: #888888;
          margin-bottom: 2.6rem;
        }
        .positioncard-header {
          font-size: 1.8rem;
          line-height: 18px;
          font-weight: 500;
          color: #333333;
          margin-bottom: 2.6rem;
        }
        .positioncard-details {
          color: var(--primary-black);
          font-size: 1.6rem;
          line-height: 150%;
          font-weight: 300;
          margin-bottom: 1rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 768px) {
          .carrer-image {
            width: 80%;
          }
        }
        @media (min-width: 1024px) {
          .carrerdetail-container {
            padding: 13.6rem 10rem 10.8rem;
          }
          .benefits-container {
            grid-column: span 2;
          }
          .benefits-header {
            text-align: center;
          }
          .benefitscard-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }
          .benefitscard {
            width: 32%;
          }
          .were-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr;
          }
          .positioncard-details {
            width: 50rem;
            height: 15rem;
          }
        }
        @media (min-width: 1200px) {
          .carrerdetail-container {
            padding-top: 10rem;
          }
          .were-details {
            grid-column: 2;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          }

          .benefitscard {
            width: 37rem;
            height: 30rem;
          }
          .positioncard-container {
            padding: 5.6rem 9rem 1.7rem 4.2rem;
            position: relative;
          }
          .positioncard-container span {
            margin-bottom: 0rem;
          }
          .positioncard-details {
            width: 74rem;
            height: 6.5rem;
            margin-bottom: 2.4rem;
          }
          .apply-button {
            display: inline-block;
            position: absolute;
            right: 9rem;
            top: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default CarrersPage;
