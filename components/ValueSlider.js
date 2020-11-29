import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";

const desktopSlidersData = [
  {
    backgroundImage: "/slider1.png",
    backgroundImage2: "/leadership.png",
    header: "Prowess",
    message:
      "We possess expertise in all offerings. As a thriving company, we focus on growth and constant advancement. Vantegral Consulting not only maintains global best practices, but we’re also about creating solutions to fit client needs.",
    color: "var(--primary-grey)",
    bottom: "22.4rem",
    left: "11.9rem",
    leadershiptop: "10.5rem",
    leadershipleft: "65.5rem",
    leadershipwidth: "42.9rem",
  },
  {
    backgroundImage: "/sliderdesktop2.png",
    header: "Ethics",
    message:
      "Our values and culture are at the core of every decision we make. It is what enables us to provide exceptional results to our clients.",
    color: "var(--primary-black)",
    bottom: "22.5rem",
    left: "37.3rem",
    leadershipwidth: "42.9rem",
  },
  {
    backgroundImage: "/sliderdesktop3.png",
    header: "Innovation",
    message:
      "Innovation is what keeps you afloat in a fast-paced world. We are constantly adapting to current trends and offering innovative solutions to drive growth in a rapidly changing environment.",
    color: "var(--primary-grey)",
    bottom: "28.6rem",
    left: "14.1rem",
    leadershipwidth: "42.9rem",
  },
  {
    backgroundImage: "/sliderdesktop4.png",
    header: "Enterprise",
    message:
      "Maximizing overall output by offering enterprise consulting services using technology and innovative techniques.",
    color: "var(--primary-grey)",
    bottom: "21.5rem",
    left: "10.1rem",
    leadershipwidth: "42.9rem",
  },
];

const mobileSlidersData = [
  {
    backgroundImage: "/slider1.png",
    backgroundImage2: "/leadership.png",
    header: "Prowess",
    message:
      "We possess expertise in all offerings. As a thriving company, we focus on growth and constant advancement. Vantegral Consulting not only maintains global best practices, but we’re also about creating solutions to fit client needs.",
    color: "var(--primary-grey)",
    bottom: "2.9rem",
    left: "2.2rem",
    leadershiptop: "3rem",
    leadershipleft: "8.8rem",
    leadershipwidth: "23rem",
  },
  {
    backgroundImage: "/slider2.png",
    header: "Ethics",
    message:
      "Our values and culture are at the core of every decision we make. It is what enables us to provide exceptional results to our clients.",
    color: "var(--primary-black)",
    bottom: "14rem",
    left: "4.2rem",
    leadershipwidth: "23rem",
  },
  {
    backgroundImage: "/slider3.png",
    header: "Innovation",
    message:
      "Innovation is what keeps you afloat in a fast-paced world. We are constantly adapting to current trends and offering innovative solutions to drive growth in a rapidly changing environment.",
    color: "var(--primary-grey)",
    bottom: "19.4rem",
    left: "2.2rem",
    leadershipwidth: "23rem",
  },
  {
    backgroundImage: "/slider4.png",
    header: "Enterprise",
    message:
      "Maximizing overall output by offering enterprise consulting services using technology and innovative techniques.",
    color: "var(--primary-grey)",
    bottom: "6.4rem",
    left: "2.8rem",
    leadershipwidth: "23rem",
  },
];

const ValueSlider = () => {
  const [current, setCurrent] = useState(0);
  const { width } = useWindowSize();

  const slidersData = width < "1200" ? mobileSlidersData : desktopSlidersData;

  const [sliderData, setSliderData] = useState(slidersData[current]);

  useEffect(() => {
    setSliderData(slidersData[current]);
  }, [current]);

  const forward = () => {
    const next = (current + 1) % slidersData.length;
    setCurrent(next);
  };

  const backward = () => {
    const previous = (current - 1) % slidersData.length;

    previous < 0 ? setCurrent(slidersData.length - 1) : setCurrent(previous);
  };
  return (
    <div className="slider-container">
      <img src={sliderData.backgroundImage} />
      {sliderData.backgroundImage2 && (
        <div className="leadershipimage">
          <img src={sliderData.backgroundImage2} className="leadershipimg" />
        </div>
      )}
      <span className="button-container">
        <button className="slider-button right" onClick={forward}>{`>`}</button>
        <button className="slider-button left" onClick={backward}>
          {"<"}
        </button>
      </span>
      <div className="slider-text">
        <h1 className="slider-header">{sliderData.header}</h1>
        <p className="slider-message">{sliderData.message}</p>
      </div>
      <p className="slider-index">{`${current + 1}/${slidersData.length}`}</p>

      <style jsx>{`
        .leadershipimage {
          position: absolute;
          top: ${sliderData.leadershiptop};
          left: ${sliderData.leadershipleft};
        }
        .leadershipimg {
          width: ${width < "1200" ? "50%" : "80%"};
          height: ${width < "1200" ? "50%" : "60%"};
        }
        .slider-container {
          width: 100%;
          height: ${width < "1200" ? "40.8rem" : "53.7rem"};
          position: relative;
          margin-bottom: 3.5rem;
        }
        .slider-container img {
          width: 100%;
          height: 100%;
        }
        .slider-index {
          margin-top: 1.6rem;
          color: var(--primary-black);
          font-size: 1.6rem;
          text-align: center;
        }
        .button-container {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 0;
          right: 0;
        }
        .slider-button {
          background: #f1f1f1;
          width: 32.59px;
          height: 27.16px;
          color: #555145;
          font-size: 1rem;
          outline: none;
        }
        .slider-text {
          color: ${sliderData.color};
          position: absolute;
          width: 23rem;
          left: ${sliderData.left};
          bottom: ${sliderData.bottom};
        }
        .slider-header {
          font-size: 3rem;
          margin-bottom: 2rem;
        }
        .slider-message {
          font-size: 1.4rem;
          line-height: 140%;
          text-align: left;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1024px) {
          .slider-container {
            width: 100%;
          }
          .slider-index {
            width: 2%;
            text-align: left;
          }
        }
        @media (min-width: 1200px) {
          .slider-container {
            width: 100%;
          }
          .slider-index {
            text-align: left;
          }
          .slider-text {
            width: 49rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ValueSlider;
