import React from "react";
import ActiveLink from "../ActiveLink";
import CircleArrowRight from "../../vectors/circle-arrow-right.svg";

const mobileImages = [
  {
    imageUrl: "/Services/mobilePics1.png",
    header: "dxfghnjm,.hgf",
    body:
      "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/mobilePics2.png",
    header: "dxfghnjm,.hgf",
    body:
      "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/mobilePics3.png",
    header: "dxfghnjm,.hgf",
    body:
      "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/mobilePics4.png",
    header: "dxfghnjm,.hgf",
    body:
      "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/mobilePics5.png",
    header: "dxfghnjm,.hgf",
    body:
      "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const desktopData = [
  {
    imageUrl: "/Services/desktopPics1.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics2.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics3.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics4.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics5.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics6.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics7.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    imageUrl: "/Services/desktopPics8.png",
    header: "jkl,kjnhb njm.l",
    body:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const InsightPage = () => {
  return (
    <div>
      <div className="mobiledisplay">
        <div className="insight-container">
          {mobileImages.map((item, index) => (
            <div key={index}>
              <img
                src={item.imageUrl}
                alt="images"
                style={{ width: "100%", height: "100%" }}
              />
              <h5 className="insight-header">{item.header}</h5>
              <p className="insight-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="desktopDisplay">
        <div className="desktopinsightcontainer">
          <div className="hero-section">
            <img src={"/Services/insightHeroDesktop.png"} />
            <h6>jkl,kjnhb njm.l</h6>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          {desktopData.map((data, index) => (
            <div key={index} className="insight-card">
              <img src={data.imageUrl} alt="insightimages" />
              <h6>{data.header}</h6>
              <p>{data.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="next-section">
        <h6>
          Next Section: <span>Our Clients</span>
        </h6>
        <p>Our Clients</p>
        <div>
          <ActiveLink href="/services/clients">
            <CircleArrowRight style={{ width: "100%", height: "100%" }} />
          </ActiveLink>
        </div>
      </div>

      <style jsx>{`
        .insight-container {
          padding: 1.7rem 1.9rem 0rem;
        }
        .insight-header {
          margin: 2.9rem 0rem 2.1rem;
          color: var(--primary-color);
          font-size: 1.8rem;
          line-height: 18px;
        }
        .insight-body {
          font-size: 1.8rem;
          line-height: 150%;
          color: var(--primary-grey);
          margin-bottom: 7rem;
        }
        .desktopDisplay {
          display: none;
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
      <style jsx>
        {`
          @media (min-width: 1024px) {
            .mobiledisplay {
              display: none;
            }
            .desktopDisplay {
              padding: 4.3rem 8.5rem 5.8rem;
              display: block;
              width: 100%;
            }
            .desktopinsightcontainer {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: 40rem repeat(3, 1fr);
              grid-column-gap: 5.9rem;
              grid-row-gap: 4.5rem;
            }
            .hero-section {
              grid-column: span 3;
              grid-row: 1;
            }
            .hero-section img {
              width: 100%;
            }
            .hero-section h6 {
              margin: 3.8rem 0rem 3.1rem;
              color: var(--primary-color);
              font-size: 2rem;
              line-height: 18px;
            }
            .hero-section p {
              color: var(--primary-grey);
              font-size: 1.6rem;
              line-height: 150%;
            }

            .insight-card {
              width: 20.1rem;
              justify-self: center;
              width: fit-content;
            }
            .insight-card img {
              width: 100%;
            }
            .insight-card h6 {
              margin: 2.8rem 0rem;
              color: var(--primary-color);
              font-size: 2rem;
              line-height: 18px;
            }
            .insight-card p {
              font-size: 16px;
              line-height: 150%;
              color: var(--primary-grey);
            }
            .insight-card:nth-child(2) {
              grid-column: 1;
              grid-row: 2;
            }
            .insight-card:nth-child(3) {
              grid-column: span 2;
              grid-row: 2;
            }
            .insight-card:nth-child(3) img {
              width: 100%;
            }
            .insight-card:nth-child(4) {
              grid-column: 1;
              grid-row: 3;
            }
            .insight-card:nth-child(5) {
              grid-column: 2;
              grid-row: 3;
            }
            .insight-card:nth-child(6) {
              grid-column: 3;
              grid-row: 3;
            }
            .insight-card:nth-child(7) {
              grid-column: 1;
              grid-row: 4;
            }
            .insight-card:nth-child(8) {
              grid-column: 2;
              grid-row: 4;
            }
            .insight-card:nth-child(9) {
              grid-column: 3;
              grid-row: 4;
            }
          }
          @media (min-width: 1200px) {
            .desktopDisplay {
              padding: 9.3rem 12.5rem 13.8rem;
            }
            .desktopinsightcontainer {
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: 1fr repeat(3, 1fr);
              grid-column-gap: 10.9rem;
              grid-row-gap: 8.5rem;
            }
            .insight-card {
              justify-self: start;
            }
            .insight-card:nth-child(3) {
              column: span 2;
            }
          }
        `}
      </style>
    </div>
  );
};

export default InsightPage;
