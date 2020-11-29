import React from "react";
import {useWindowSize} from "react-use";
import ReusableHero from "../ReusableHero";

const desktopImages = {
  imageUrl: "url('/industries.png') bottom right no-repeat",
  top: "0px",
  right: "190px",
  width: "100%",
  height: " 100%",
  backgroundSize: "100%",
  header: "Industries We Serve",
  message:
    "Each client and project is unique. With every project we execute, we bring with it industry knowledge, expertise, and technical know-how.",
  gradient:
    "linear-gradient(90deg,#000000 13.96%,rgba(0, 0, 0, 0.95) 23.82%,rgba(0, 0, 0, 0.8) 35.21%,rgba(0, 0, 0, 0.6) 46.35%,rgba(0, 0, 0, 0.4) 65.21%,rgba(0, 0, 0, 0.3) 84.24%,rgba(46, 46, 56, 0) 100%) top right / contain no-repeat padding-box border-box",
};

const mobileImages = {
  imageUrl: "url('/industriesHero.png') bottom  no-repeat",
  top: "0rem",
  right: "-4rem",
  width: "100%",
  height: "100%",
  backgroundSize: "contain",
  header: "Industries We Serve",
  message:
    "Each client and project is unique. With every project we execute, we bring with it industry knowledge, expertise, and technical know-how.",
  gradient: " rgba(0, 0, 0, 0.7);",
};

const Industries = () => {
  const {width} = useWindowSize();
  const images = width < "960" ? mobileImages : desktopImages;

  return (
    <section className="industries-container">
      <ReusableHero image={images} />
      <div className="industries-content">
        <img src={"/energy.png"} alt="energy" className="energy-img" />
        <div className="industries-details energy">
          <h6 className="industries-header">Energy</h6>
          <p className="industries-text">
            Create a new meaning to success and innovation by understanding and
            comparing possible instances, negative and positive with the energy
            space, and planning towards them. Manage risk by laying out
            plausible situations and planning towards them.
          </p>
        </div>
        <img src={"/Financial.png"} alt="financial" className="financial-img" />
        <div className="industries-details financial">
          <h6 className="industries-header">Financial</h6>
          <p className="industries-text">
            Complete top-to-bottom transformation with expert management
            consulting. Offering not only informed guidance but also financial
            aid when required. Services range from asset and wealth management
            to process optimization influenced by industry regulatory standards.
          </p>
        </div>
        <img
          src={"/technology.png"}
          alt="technology"
          className="technology-img"
        />
        <div className="industries-details technology">
          <h6 className="industries-header">Technology</h6>
          <p className="industries-text">
            There are more expectations from technology companies for
            innovation, but when change can be both a blessing and a curse, risk
            management and planning is required. We immerse ourselves in every
            stage of development and help to refine R&D processes, implement
            cost reduction plans, and much more.
          </p>
        </div>
      </div>
      <style jsx>{`
        .industries-content {
          background-color: #ffffff;
          padding: 7.6rem 2.5rem 5.6rem;
          display: grid;
          grid-template-columns: 1fr;
        }
        img {
          width: 100%;
          object-fit: contain;
        }
        .industries-details {
          margin: 3.6rem 0rem 3.1rem;
        }
        .industries-header {
          color: #333333;
          font-size: 1.8rem;
          line-height: 18px;
          margin-bottom: 3.1rem;
        }

        .industries-text {
          color: #2e2e38;
          font-size: 2rem;
          line-height: 150%;
          font-weight: 300;
          margin-bottom: 7.6rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 900px) {
          .industries-content {
            padding: 13.6rem 10rem 6.5rem;
            grid-template-columns: repeat(12, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-row-gap: 12rem;
          }
          .energy-img {
            grid-column: 1 / 6;
            grid-row: 1;
            align-self: start;
          }
          .energy {
            grid-column: 7 / 13;
            grid-row: 1;
            align-self: center;
          }
          .financial {
            grid-column: 1 / 7;
            grid-row: 2;
            align-self: center;
          }
          .financial-img {
            grid-column: 8 / 13;
            grid-row: 2;
          }
          .technology-img {
            grid-column: 1 / 6;
            grid-row: 3;
          }
          .technology {
            grid-column: 7 / 13;
            grid-row: 3;
            align-self: center;
          }
        }
        @media (min-width: 1200px) {
          .industries-details {
            margin: 0rem 0rem 3.1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Industries;
