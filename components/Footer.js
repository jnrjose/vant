import React, { useRef, useState } from "react";
import fetch from "isomorphic-unfetch";
import Vantegral from "../vectors/vantegral.svg";
import Arrow from "../vectors/arrow-right.svg";
import Linkedin from "../vectors/Linkedin.svg";
import Twitter from "../vectors/Twitter.svg";
import Facebook from "../vectors/Facebook.svg";
import ActiveLink from "./ActiveLink";

const Footer = () => {
  const inputEl = useRef(null);

  const [message, setMessage] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    const res = await fetch("/.netlify/functions/subscribe/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      setMessage(error);

      return;
    }
    if (res.status === "502") {
      inputEl.current.value = "";
      setMessage("Success! 🎉 You are now subscribed to the newsletter.");
      return;
    }
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
  };
  return (
    <footer>
      <div className="footer-logo">
        <Vantegral
          style={{ marginBottom: "4rem", width: "100%", height: "100%" }}
        />
      </div>
      <div className="footer-subscription-container">
        <p className="footer-text">Subscribe to our latest insights</p>
        <div className="footer-input-container">
          <input
            className="footer-input"
            placeholder="Enter Email Address"
            ref={inputEl}
          />

          <button
            className="footer-button"
            onClick={subscribe}
            disabled={inputEl === null ? true : false}
          >
            <Arrow />
          </button>
        </div>
        <div style={{ color: "red", fontSize: "1.2rem" }}>
          {message ? message : ""}
        </div>
      </div>
      <div className="footer-socials">
        <a href="#">
          <Linkedin />
        </a>
        <a href="#">
          <Facebook />
        </a>
        <a href="#">
          <Twitter />
        </a>
      </div>
      <div className="footer-links">
        <div className="footer-links-item">
          <ActiveLink
            href="/insights"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Insight
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/services"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Services
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/industries"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Industries
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/aboutus/overview"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            About Us
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/careers"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Careers
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/contact"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Contact
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/terms"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Terms & Conditions
          </ActiveLink>
        </div>
        <div className="footer-links-item">
          <ActiveLink
            href="/privacy"
            color="#333333"
            hovercolor="#ABB3BF"
            padding="0rem"
          >
            Privacy
          </ActiveLink>
        </div>
      </div>
      <p className="footer-copyright">
        2020 Vantegral Consulting. All rights Reserved
      </p>
      <style jsx>{`
        footer {
          padding: 3rem 2rem 5.1rem;
          background-color: #f1f1f1;
          display: flex;
          flex-direction: column;
        }
        .footer-logo {
          width: 11.9rem;
        }
        .footer-subscription-container {
        }
        .footer-text {
          font-size: 1.8rem;
          color: #333333;
          margin-bottom: 1.9rem;
        }
        .footer-input-container {
          display: flex;
        }
        .footer-input {
          border: 1px solid #2e2e38;
          height: 4rem;
          width: 80%;
          padding: 1rem 1.3rem;
          margin-bottom: 3.2rem;
        }

        .footer-input:focus {
          outline: 1px solid #fffa46;
          border: none;
        }
        .footer-input::placeholder {
          color: #abb3bf;
          font-size: 1.2rem;
        }
        .footer-button {
          height: 4rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 15%;
          background-color: #000;
          border: none;
          margin-left: 7px;
        }

        .footer-button:hover {
          background-color: #fffa46;
          outline: 1px solid #2e2e38;
        }
        .footer-socials {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 35%;
          margin-bottom: 4rem;
        }
        .footer-socials a:hover {
          transform: translateY(-10px);
          transition: transform ease-in 0.2s;
        }
        .footer-links {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 10px 10px;
          grid-gap: 2.5rem;
          padding: 0;
          margin: 0;
          height: 20%;
          margin-bottom: 4rem;
        }
        .footer-links-item {
          font-size: 1.2rem;
        }

        .footer-links-item a {
          color: #333333;
          text-decoration: none;
        }
        .footer-links-item a:hover {
          color: #abb3bf;
        }

        .footer-copyright {
          color: #888888;
          font-size: 1.2rem;
          font-weight: 350;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 620px) {
          .footer-input-container {
            width: 60%;
          }
        }
        @media (min-width: 960px) {
          footer {
            position: relative;
            padding: 5.7rem 7rem 8rem 8rem;
          }
          .footer-input-container {
            width: 100%;
          }
          .footer-text {
            font-size: 1.4rem;
          }
          .footer-subscription-container {
            position: absolute;
            top: 12rem;
            right: 5rem;
            width: 30%;
          }
          .footer-socials {
            width: 10%;
          }
          .footer-links {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            width: 60%;
            margin-bottom: 2rem;
          }
          .footer-links-item {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
