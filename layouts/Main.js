import React,{useEffect} from "react";
import Head from "../components/Head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { initGA, logPageView } from "../utils/analytics";

const Main = ({ children }) => {
  
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  })
  
  useEffect(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  })

  return (
    <div className="container">
      <Head />
      <Header />
      {children}
      <Footer />
      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 auto;
        }

        @media (min-width: 960px) {
          .container {
            width: 100%;
           
          }
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: "GT Eesti Pro Text Book";
          src: url("/fonts/GT-Eesti-Pro-Text-Book.ttf");
          font-style: normal;
          font-display: auto;
        }
        :root{
          --primary-color: #FFFA46;
          --main-bg-color: #141518;
          --contactform-font-color:#C3C3C3 ;
          --primary-grey: #FAFAFA;
          --primary-black: #2E2E38;
          --primary-white: #FFFFFF;
        }

        html {
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "GT Eesti Pro Text Book";
          font-size: 62.5%;
        }
        body {
          background-color: #141518;
          font-size: 1rem;
        }
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        li,
        a,
        ul {
          margin: 0;
          padding: 0;
          text-decoration: none;
        }

        li {
          list-style-type: none;
        }
        .card:hover {
          box-shadow: 1px 0px 5px 1px #fffa46;
        }
        button{
          font-family: "GT Eesti Pro Text Book";
        }
      `}</style>
    </div>
  );
};

export default Main;

// max-width: 1200px;
