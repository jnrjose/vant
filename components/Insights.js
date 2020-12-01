import React from "react";
import Image from "next/image";
import InsightCard from "./InsightCard";
import InsightHero from "./InsightHero";

const insightContent = [
  {
    imageUrl: "/insightJobHunt.png",
    message: `Dear Jobseeker,
    Here's our today's top tip.
    When it comes to job hunting, your CV is paramount that even the smallest details count. Get it right, and you’ll have an interview in no time, but get it wrong, and you may face rejection after rejection.
    `,
    title: "Job Hunting tips",
    link: "/insight",
  },
  {
    imageUrl: "/insightGraduate.png",
    message: `Dear Young professionals and fresh graduates,
    Being a new graduate can be exciting, as one chapter of life is closing and another is just beginning. in many ways finding post-grad work is a job in itself`,
    title: "Job Advice for New graduates",
    link: "/insight",
  },
  {
    imageUrl: "/insightDigital.png",
    message:
      "Digital technologies have risen to prominence as a critical determinant of economic growth, national security, and international competitiveness.",
    title: "Impact of Digital technology",
    link: "/insight",
  },
  {
    imageUrl: "/insightSuccess.png",
    message:
      "The true test of success comes when you run up against challenges or roadblocks in your path.",
    title: "Motivation for the week",
    link: "/insight",
  },
];

const Insights = () => {
  return (
    <div className="insight-container">
      <div className="insight-header-wrapper">
        <h2 className="insight-header-title">Insights</h2>
        <p className="insight-header-text">Read More about out thinking</p>
      </div>
      <div className="herocard-section">
        <InsightHero />
        <div className="insightcard-section">
          {insightContent.map((image, index) => (
            <InsightCard key={index} image={image} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .insight-container {
        }
        .insight-header-wrapper {
          display: flex;
          flex-direction: column;
          padding: 5rem 7rem 8rem;
          background-color: #1f2023;
        }
        .insight-header-title {
          color: #c3c3c3;
          margin-bottom: 1.9rem;
          font-size: 3rem;
          text-align: center;
        }
        .insight-header-text {
          color: #949494;
          font-size: 1.6rem;
          text-align: center;
        }
        .insightcard-section {
          padding: 2.5rem 3.1rem;
          background-color: #1f2023;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 620px) {
          .insight-header-wrapper {
            padding: 3rem 5rem 7rem;
          }
          .insightcard-section {
            padding: 0rem 0rem 0rem 3.1rem;
          }
        }
        @media (min-width: 960px) {
          .insightcard-section {
            padding: 0rem 3.1rem;
            width: 60%;
            margin: 0;
          }
          .herocard-section {
            display: flex;
            justify-content: space-between;
            padding: 0 7rem;
            background-color: #1f2023;
          }
        }
      `}</style>
    </div>
  );
};

export default Insights;
