import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import SliderToggle from "./SliderToggle";

const desktopImages = [
  {
    imageUrl: "url('/Hero1.png') bottom right no-repeat",
    bracket: "/side.svg",
    top: "150px",
    right: "-30px",
    width: "55%",
    height: " 100%",
    backgroundSize: "contain",
    header: "Dominating Advisory with Distinction.",
    message:
      "Creating new opportunities and utilizing innovative ideas to facilate transformation, one business at a time.",
    gradient: "linear-gradient(transparent)",
  },
  {
    imageUrl: "url('/Hero2.png') bottom right no-repeat",
    bracket: "/up.svg",
    top: "0px",
    right: "190px",
    width: "100%",
    height: " 100%",
    backgroundSize: "100%",
    header: "Doing Things Differently.",
    message:
      "Breaking out of the norm. Thinking within and outside the box. Transparency and accountability. All synonyms of Vantegral Consulting.",
    gradient:
      "linear-gradient(90deg,#000000 13.96%,rgba(0, 0, 0, 0.95) 23.82%,rgba(0, 0, 0, 0.8) 35.21%,rgba(0, 0, 0, 0.6) 46.35%,rgba(0, 0, 0, 0.4) 65.21%,rgba(0, 0, 0, 0.3) 84.24%,rgba(46, 46, 56, 0) 100%) top right / contain no-repeat padding-box border-box",
  },
  {
    imageUrl: "url('/Hero3.png') bottom right no-repeat",
    bracket: "/down.svg",
    right: "0%",
    bottom: "-40px",
    width: "100%",
    height: " 100%",
    backgroundSize: "contain",
    header: "Information Guides Us.",
    message:
      "Leveraging on ever-evolving technologies to provide data-driven decisions and solutions for enabling financial and social development.",
    gradient: "linear-gradient(transparent)",
  },
];

const mobileImages = [
  {
    imageUrl: "url('/Hero1.png') bottom no-repeat",
    bracket: "/mobileBracketSide.svg",
    top: "35rem",
    right: "-5rem",
    width: "100%",
    height: " 50%",
    backgroundSize: "50%",
    header: "Dominating Advisory with Distinction.",
    message:
      "Creating new opportunities and utilizing innovative ideas to facilate transformation, one business at a time.",
    gradient: "linear-gradient(transparent)",
  },
  {
    imageUrl: "url('/Hero2.png') bottom  no-repeat",
    bracket: "/mobileBracketUp.svg",
    top: "0rem",
    right: "-4rem",
    width: "100%",
    height: "100%",
    backgroundSize: "contain",
    header: "Doing Things Differently.",
    message:
      "Breaking out of the norm. Thinking within and outside the box. Transparency and accountability. All synonyms of Vantegral Consulting.",
    gradient:
      "linear-gradient(178.44deg, #000000 14.61%, rgba(0, 0, 0, 0.95) 24.3%, rgba(0, 0, 0, 0.8) 35.5%, rgba(0, 0, 0, 0.6) 50.77%, rgba(0, 0, 0, 0.4) 64.99%, rgba(0, 0, 0, 0.3) 83.69%, rgba(46, 46, 56, 0) 99.19%);",
  },
  {
    imageUrl: "url('/Hero3.png') bottom center no-repeat",
    bracket: "/mobileBracketDown.svg",
    right: "-1rem",
    bottom: "0rem",
    width: "100%",
    height: " 100%",
    backgroundSize: "100%",
    header: "Information Guides Us.",
    message:
      "Leveraging on ever-evolving technologies to provide data-driven decisions and solutions for enabling financial and social development.",
    gradient: "linear-gradient(transparent)",
  },
];

const Hero = () => {
  const { width } = useWindowSize();
  const images = width < "960" ? mobileImages : desktopImages;
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(images[current]);

  useEffect(() => {
    const next = (current + 1) % images.length;
    const id = setTimeout(() => setCurrent(next), 7000);

    return () => clearTimeout(id);
  }, [current]);

  useEffect(() => {
    handleImageChange(current);
  }, [current]);

  const handleImageChange = (i) => {
    current === i ? null : setCurrent(i);
    setImage(images[i]);
  };

  return (
    <div className="hero-container">
      <div className="hero">
        <img
          src={image.bracket}
          alt="brackets"
          loading="lazy"
          className="hero-bracket"
        />
        <div className="hero-toggle">
          {images.map((_, index) => (
            <SliderToggle
              key={index}
              handleImageChange={handleImageChange}
              index={index}
              active={current === index}
            />
          ))}
        </div>
        <div className="hero-detail-container">
          <p className="hero-title">{image.header}</p>

          <p className="hero-text">{image.message}</p>
          {/*<button className="hero-button">Learn More</button>*/}
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
        .hero-toggle {
          position: absolute;
          left: 3.8rem;
          bottom: 5rem;
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
          margin: 1rem 0 2.5rem;
        }
        .hero-button {
          color: #ffffff;
          border: 1px solid #fafafa;
          border-radius: 0.3rem;
          background-color: transparent;
          padding: 1.2rem 1.5rem;
          font-size: 1.2rem;
          align-self: center;
        }
        .hero-button:hover {
          background-color: #fffa46;
          color: #000;
          border: none;
          transition: all ease-in-out 0.5s;
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
            text-align: left;
          }
          .hero-button {
            align-self: flex-start;
          }
        }
        @media (min-width: 1200px) {
          .hero-container {
            height: 73vh;
            max-height: 76vh;
          }
          .hero {
            position: relative;
            overflow: hidden;
          }
          .hero-bracket {
            position: absolute;
            z-index: 100;
            top: ${image.top};
            right: ${image.right};
            bottom: ${image.bottom};
            width: 47rem;
            height: 43rem;
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

export default Hero;
