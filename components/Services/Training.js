import React from "react";
import LeftChevron from "../../vectors/chevron-left.svg";
import ActiveLink from "../ActiveLink";
import CircleArrowRight from "../../vectors/circle-arrow-right.svg";

const digitalData = [
  {
    header: "Digital Strategy",
    messageOne:
      "The integrated and versatile nature of our training faculties enable us to identify gaps and we partner with a network of experts, innovators and influencers to evaluate the training, development initiatives and interventions required.",
    // messageTwo: "We define the appropriate combination of technology for your organization. We create strategies and work with your digital marketing team to execute them effectively.",
    imageUrl: "/digitalpics1.png",
  },
  {
    header: "Digital Academy & Recruitment",
    messageOne:
      "Our training packages are delivered in the most practical and flexible plan. We facilitate executive management courses, technical courses, field trips, and study tours delivered in international locations, and in collaboration with reputable, internationally recognised certification and accreditation agencies.",
    // messageTwo:"We offer staffing and recruitment services to clients seeking to create a digital marketing team to help drive innovation and increase company value.",
    imageUrl: "/digitalpics2.png",
  },
  {
    header: "Digital transformation",
    messageOne: () => (
      <>
        Our training and development also covers{" "}
        <strong>leadership and performance management</strong>. We develop
        leaders with analytic and globally aware critical thinking skills,
        strong management competencies and mastery of organisational complexity
        as well as the ability to create the appropriate culture and environment
        for adaptive, engaged and inspired performance.
      </>
    ),
    // messageTwo:"We use your company’s information, as well as, digital data to customize the appropriate solution that is ideal for your business.",
    imageUrl: "/digitalpics3.png",
  },
  // {
  //   header: "Product Developement",
  //   messageOne:
  //     "From the conceptualization and design to the development and deployment, we take complete control of the product development process. At our consulting firm, we turn ideas into physical results. This could be anything from the rebranding of your company to the development of a new product",
  //   messageTwo:
  //     "Our product managers create an avenue for constant communication. We work directly with every client to define the critical components that make up the target market.",
  //   imageUrl: "/digitalpics4.png",
  // },
];

const DigitalPage = () => {
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
            <h5>Training and Development</h5>
            <p>
              We at Vantegral Consulting understand that the most important
              community and organisational assets are the people and as such, we
              assist our clients in building and retaining the talent and
              management systems that deliver impactful and lasting results.
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
          <h5 className="howwehelp-header">{""}</h5>
          {digitalData.map((data, index) => (
            <div className="howwehelp" key={index}>
              <div className="howwehelp-message-container">
                {/* <h6 className="howwehelp-subheader">{data.header}</h6> */}
                <p>
                  {typeof data.messageOne === "function"
                    ? data.messageOne()
                    : data.messageOne}
                </p>
                <p>{data.messageTwo}</p>
              </div>
              <img src={data.imageUrl} alt="strategy1" />
            </div>
          ))}
        </div>
      </div>
      <div className="next-section">
        <h6>
          Next Section: <span>Outsourcing and Support</span>
        </h6>
        <p>A glimpse into how we think</p>

        <div>
          <ActiveLink href="/services/outsourcing">
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
            padding: 7.1rem 5rem 0rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 10px repeat(3, 1fr);
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
          .howwehelp:nth-child(4) {
            grid-row: 4;
            grid-column: span 2;
            display: flex;
            flex-direction: row-reverse;
          }
          .howwehelp:nth-child(4) .howwehelp-message-container {
            margin-left: 9.2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 66.7rem;
          }
          .howwehelp:nth-child(5) {
            grid-row: 5;
            grid-column: span 2;
            display: flex;
          }
          .howwehelp:nth-child(5) .howwehelp-message-container {
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

export default DigitalPage;
