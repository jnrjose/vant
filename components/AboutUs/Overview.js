import React from "react";
import ReusableHero from "../ReusableHero";
import CircleArrowRight from "../../vectors/circle-arrow-right.svg";
import ActiveLink from "../ActiveLink";

const desktopImages = {
  imageUrl: "url('/overviewhero.png') bottom right no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "About Vantegral",
  message:
    "Vantegral Consulting is a leading research and advisory organisation in Nigeria, West Africa that specialises in recruitment and talent acquisition; training, development and empowerment; as well as outsourcing and support for the public, private and not-for-profit sectors.",
  // message:
  // "Established in 2019, the core of Vantegral Consulting is deep-rooted in helping to create catalysts for personal and organization growth both socially and economically. Our focus is on overall enterprise consulting, and we are about helping businesses achieve success on all fronts.",
  gradient:
    "linear-gradient(transparent) top right / contain no-repeat padding-box border-box",
};

const records = [
  {
    number: 2,
    message: "Years in consulting",
  },
  {
    number: 3,
    message: "Clients",
  },
  {
    number: 6,
    message: "Employees",
  },
  {
    number: 7,
    message: "Industries",
  },
];

const OverviewPage = () => {
  return (
    <section className="industries-container">
      <ReusableHero image={desktopImages} />
      <div className="industries-content">
        <div>
          We take a human-centred and evidence-driven approach to understanding
          the challenges, opportunities and possible solutions that transform
          individuals, organisations and institutions. Our expertise in systems
          design enables us to support our clients to achieve their aims for
          transformation, culture change and human capacity development within
          organisations and communities.
        </div>
        <img src={"/overview-content.png"} alt="overview" />
        <div>
          In today's emerging world where talent, training and leadership have
          become the currency for engagement, developing workforce human
          capacity is indispensable and as such, we at Vantegral Consulting,
          promote long-term research and investment in human capacity
          development. Our team encompasses seasoned professionals, discipline
          specific consultants and strategists, as well as researchers and
          certified trainers that bring in broad functional expertise to deliver
          solutions to our clients’ most critical problems.
        </div>
      </div>
      <div className="industries-record">
        {records.map((record, index) => (
          <div className="industries-record--detail" key={index}>
            <span>{record.number}</span>
            <p>{record.message}</p>
          </div>
        ))}

        <div className="differences-container">
          <img src={"/difference.png"} />
          <div className="differences-text-container">
            <h6>Setting Ourselves Apart</h6>
            <p>
              We take pride in immersing ourselves in our client’s shoes,
              working as a team to attain exceptional results. We make sure our
              ambitions and that of the client are aligned, and we continue to
              monitor progress until success is achieved.
            </p>
          </div>
        </div>
      </div>
      <div className="next-section">
        <h6>
          Next Section: <span>Values & Cultures</span>
        </h6>
        <p>Vantegral People & Value</p>
        <div>
          <ActiveLink href="/aboutus/values">
            <CircleArrowRight style={{ width: "100%", height: "100%" }} />
          </ActiveLink>
        </div>
      </div>
      <style jsx>{`
        .industries-content {
          padding: 5.8rem 3.3rem 7.8rem;
          background-color: #fff;
          color: var(--primary-black);
          font-size: 20px;
          line-height: 170%;
        }
        .industries-content img {
          width: 100%;
          height: 100%;
          margin: 8rem 0rem 5rem;
        }
        .industries-record {
          padding: 7.5rem 3.8rem 5.6rem;
          background-color: var(--main-bg-color);
        }

        .differences-container {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 18.7rem 1fr;
        }
        .differences-container img {
          width: 100%;
          height: 100%;
          border-radius: 0px 5px 5px 0px;
          grid-row: 1;
          object-fit: cover;
        }
        .industries-record--detail {
          margin: 1.9rem 0rem 9.4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .industries-record--detail span {
          color: var(--primary-color);
          font-size: 4.2rem;
          line-height: 150%;
          margin-bottom: 2.1rem;
        }
        .industries-record--detail p {
          color: var(--primary-grey);
          font-size: 2.4rem;
          line-height: 150%;
        }

        .differences-text-container {
          padding: 8.8rem 2.1rem 7.3rem 2.5rem;
          grid-row: 2;
          background-color: var(--primary-black);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .differences-text-container h6 {
          font-size: 3rem;
          line-height: 120%;
          color: var(--primary-color);
          margin-bottom: 4rem;
          width: 1.3rem;
        }

        .differences-text-container p {
          font-size: 2rem;
          line-height: 150%;
          color: var(--primary-grey);
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
        @media (min-width: 768px) {
          .industries-record .differences-container {
            grid-template-rows: 35rem 1fr;
          }
          .differences-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        @media (min-width: 1024px) {
          .industries-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 0.5fr 1fr;
            grid-row-gap: 6.5rem;
            grid-column-gap: 3.1rem;
            padding: 12.1rem 13.3rem 11.8rem;
          }
          .industries-content div:nth-child(1) {
            grid-row: 1;
            grid-column: span 2;
          }
          .industries-content img {
            grid-row: 2;
            grid-column: 1;
            margin: 0rem;
          }
          .industries-content div:nth-child(2) {
            grid-row: 2;
            grid-column: 2;
          }
          .industries-record {
            display: flex;
            flex: 1;
            flex-wrap: wrap;
            justify-content: space-around;
            padding: 7rem 10rem 15.2rem;
          }
          .differences-container {
            display: grid;
            grid-template-columns: 1fr 0.8fr;
            grid-template-rows: 1fr;
            margin: 14rem 0rem 0rem;
          }
          .differences-container img {
            grid-column: 2;
            grid-row: 1;
          }
          .differences-text-container {
            grid-column: 1;
            grid-row: 1;
            padding: 13.9rem 6.3rem 20rem 4.4rem;
          }
          .differences-text-container h6 {
            width: 100%;
          }
          .next-section {
            font-size: 2rem;
            padding: 3.7rem 0rem 3rem;
          }
          .next-section p {
            font-size: 3rem;
            margin: 1.1rem 0 1.4rem;
          }
        }

        @media (min-width: 1200px) {
          .industries-content {
            grid-template-columns: 0.7fr 1fr;
            grid-template-rows: 0.5fr 3fr;
          }
        }
      `}</style>
    </section>
  );
};

export default OverviewPage;
