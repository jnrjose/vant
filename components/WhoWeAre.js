import React from "react";

const WhoWeAre = () => {
  return (
    <div className="whoweare-container">
      <h4 className="whoweare-header">Who we are</h4>
      <p className="whoweare-text">
        We are Vantegral Consulting. Our sole aim is to offer value to clients
        and businesses. With an array of services ranging from recruitment
        outsourcing, restructuring, capability development, management advisory,
        and growth strategy, we are about creating and implementing solutions.
        We are about Innovating. We are Change.
      </p>
      <style jsx>
        {`
          .whoweare-container {
            padding: 3.9rem 2.2rem 8.4rem;
            background-color: #1f2023;
          }
          .whoweare-header {
            color: #c3c3c3;
            font-size: 3rem;
            text-align: center;
            margin-bottom: 2.7rem;
          }
          .whoweare-text {
            color: #c0c0c0;
            font-size: 1.6rem;
            line-height: 160%;
            text-align: left;
          }
        `}
      </style>
      <style jsx>{`
        @media (min-width: 620px) {
          .whoweare-container {
            padding: 3.9rem 3.2rem 8.4rem;
          }
          .whoweare-text {
            text-align: center;
          }
        }
        @media (min-width: 960px) {
          .whoweare-container {
            padding: 8rem 22rem;
            margin: 0 auto;
          }
          .whoweare-text {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default WhoWeAre;
