import React from "react";
import People from "../../vectors/people.svg";
import Linkedin from "../../vectors/leadership-linkedin.svg";

const leaderships = [
  {
    name: "Jide Baba",
    image: "/leadership1.png",
    title: "CEO",
    details:
      "It is a long established fact that a reader will bedistracted by the eadable content of a page when looking at its layout. The point of using Lorem Ipsum is t",
    linkedinUrl: "#",
  },
  {
    name: "Sade Lumo",
    image: "/leadership2.png",
    title: "CEO",
    details:
      "It is a long established fact that a reader will bedistracted by the eadable content of a page when looking at its layout. The point of using Lorem Ipsum is t",
    linkedinUrl: "#",
  },
  {
    name: "Lala faboro",
    image: "/leadership3.png",
    title: "CEO",
    details:
      "It is a long established fact that a reader will bedistracted by the eadable content of a page when looking at its layout. The point of using Lorem Ipsum is t",
    linkedinUrl: "#",
  },
];

const PeoplePage = () => {
  return (
    <section className="people-container">
      <div className="people-welcome">
        <h5 className="people-welcome-header">Our People</h5>
        <p className="people-welcome-text">
          With a diverse group of professionals and experts in various niches
          and industries, Vantegral can boast of an unbeatable workforce. We are
          defined by the intellectuals that make up our people. From the on-set,
          the core of our consulting company and growth is in our togetherness
          and ability to function as one unit.
        </p>
      </div>
      <div className="people-image">
        <People style={{width: "100%", height: "100%"}} />
      </div>
      <div className="leadership-container">
        <h6 className="leadership-header">Our Leadership</h6>
        <div className="leadership-card-container">
          {leaderships.map((leadership, index) => (
            <div className="leadership-card" key={index}>
              <img src={leadership.image} alt="leadership-image" />
              <p className="leadership-name">{leadership.name}</p>
              <p className="leadership-title">{leadership.title}</p>
              <p className="leadership-details">{leadership.details}</p>
             <a
                href={leadership.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer">
                <Linkedin />
             </a>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .people-container {
          background-color: var(--main-bg-color);
          padding: 11.4rem 2.4rem 0rem;
        }
        .people-welcome-header {
          color: var(--primary-color);
          font-size: 1.8rem;
          text-align: center;
          line-height: 18px;
          margin-bottom: 1.4rem;
        }
        .people-welcome-text {
          text-align: center;
          font-size: 2rem;
          line-height: 120%;
          color: var(--primary-grey);
          margin-bottom: 8.1rem;
        }
        .people-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .leadership-container {
          margin: 11.4rem 0rem 4.8rem;
        }

        .leadership-header {
          color: var(--primary-color);
          font-size: 2.8rem;
          line-height: 18px;
          text-align: center;
          margin-bottom: 1.4rem;
        }
        .leadership-card-container {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }
        .leadership-card {
          border-radius: 5px;
          background-color: var(--primary-black);
          width: 312px;
          height: 452px;
          margin-top: 5.2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 5rem 3rem 6.1rem;
          
        }
        .leadership-card img {
          width: 47%;
          height: 37%;
          border-radius: 50%;
        }
        .leadership-details {
          color: var(--contactform-font-color);
          font-size: 1.4rem;
          text-align: center;
          line-height: 18px;
          margin-bottom: 1.6rem;
        }
        .leadership-title {
          margin-bottom: 2.3rem;
          font-size: 1.6rem;
          text-align: center;
          color: var(--contactform-font-color);
        }
        .leadership-name {
          text-align: center;
          font-size: 1.8rem;
          line-height: 18px;
          color: var(--primary-grey);
          margin: 3.9rem 0rem 1.3rem;
        }
        @media (min-width: 1024px) {
          .people-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 45.5rem 1fr;
            margin: 0rem 0rem 3.5rem 5rem;
            padding: 0rem 2.4rem 0rem;
          }
          .people-welcome {
            grid-column: 1;
            grid-row: 1;
            align-self: center;
          }
          .people-welcome-header {
            text-align: left;
            margin-bottom: 3.1rem;
          }
          .people-welcome-text {
            text-align: left;
            width: 39.2rem;
          }
          .people-image {
            grid-column: 2;
            grid-row: 1;
            align-self: start;
          }
          .leadership-container {
            grid-column: span 2;
            grid-row: 2;
          }
          .leadership-card-container {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
          .leadership-card + .leadership-card {
            margin-left: 1rem;
          }
        }
        @media (min-width: 1200px) {
          .people-container {
            grid-template-columns: 1fr 0.7fr;
            margin: 0rem 0rem 9.5rem 10rem;
            grid-template-rows: 65.5rem 1fr;
          }
          .leadership-container {
            padding: 13.4rem 10.7rem 0rem 2.7rem;
            margin: 0rem 0rem 4.8rem;
          }
          .people-welcome-text {
            width: 59.2rem;
          }

          .leadership-card-container {
            margin-top: 10.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default PeoplePage;
