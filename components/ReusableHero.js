import React from "react";

const ReusableHero = ({image, height}) => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-detail-container">
          <p className="hero-title">{image.header}</p>

          <p className="hero-text">{image.message}</p>
        </div>
      </div>

      <style jsx>{`
        .hero-container {
          height: 76vh;
        }
        .hero-bracket {
          position: absolute;
          z-index: 100;
          top: ${image.top};
          right: ${image.right};
          bottom: ${image.bottom};
          width: 15rem;
          height: 12rem;
        }

        .hero {
          position: relative;
          width: 100%;
          height: 100%;
          min-width: 100%;
          min-height: 100%;
          overflow: hidden;
        }
        .hero::before {
          background: ${image.imageUrl};
          background-size: cover;
          content: "";
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          width: ${image.width};
          height: 100%;
          z-index: -2;
        }

        .hero::after {
          background: ${image.gradient};
          content: "";
          display: block;
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: ${image.height};
          z-index: -1;
        }

        .hero-detail-container {
          padding: 12rem 3rem 0;
          position: absolute;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .hero-title {
          color: #fffa46;
          margin-bottom: 1.3rem;
          text-align: center;
          font-size: 1.5rem;
        }
        .hero-text {
          color: #fafafa;
          line-height: 120%;
          font-size: 2rem;
          text-align: center;
          margin: 2rem 0 2.5rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 620px) {
          .hero-container {
            height: 50vh;
          }

          .hero-detail-container {
            margin-left: 2rem;
            margin-top: 5rem;
            align-items: flex-start;
            width: 50%;
          }
          .hero-title {
            text-align: left;
            font-size: 1.8rem;
          }
          .hero-text {
            text-align: justify;
          }
        }
        @media (min-width: 1200px) {
          .hero-container {
            height: ${height || "73vh"};
            max-height: 76vh;
          }
          .hero {
            position: relative;
            overflow: hidden;
          }
          .hero::before {
            background: ${image.imageUrl};
            background-size: 100%;
            content: "";
          }
          .hero::after {
            background: ${image.gradient};
            background-size: 100%;
            content: "";
          }
          .hero-detail-container {
            margin-left: 5rem;
            margin-top: 8rem;
            align-items: flex-start;
            width: 40%;
          }
        }
      `}</style>
    </div>
  );
};

export default ReusableHero;
