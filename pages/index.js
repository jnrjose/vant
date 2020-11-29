import React, { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";

import Link from "next/link";
import Main from "../layouts/Main";
import GetInTouch from "../components/GetInTouch";
import Expertise from "../components/Expertise";
import WhoWeAre from "../components/WhoWeAre";
import Insights from "../components/Insights";
import Hero from "../components/Hero";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem("alreadyVisited");
    if (visited) {
      setOpenModal(false);
    } else {
      localStorage.setItem("alreadyVisited", true);
      setOpenModal(true);
    }
  }, []);

  const onCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <Main>
      <Hero />
      <Insights />
      <WhoWeAre />
      <Expertise />
      <GetInTouch />
      <Modal
        open={openModal}
        onClose={onCloseModal}
        classNames={{ modal: "customModal" }}
        bottom
      >
        <div className="modal-wrapper">
          <p
            style={{
              color: "#000000",
              fontSize: "1.5rem",
              textAlign: "left",
              lineHeight: "150%",
            }}
          >
            We use cookies to offer you a better experience, analyse site
            traffic and offer targeted advertisement. By continuing to use this
            site, you consent to the use of cookies in accordance to our{" "}
            <Link href="/terms">
              <span
                style={{
                  fontWeight: "700",
                  textDecoration: "underline",
                  color: "var(--primary-black)",
                  fontsize: "1.6rem",
                }}
              >
                cookie policy
              </span>
            </Link>
            .
          </p>
          <div style={{ margin: "2.2rem auto 4rem" }}>
            <button
              style={{
                backgroundColor: "#FFFA46",
                width: "149px",
                height: "40px",
                color: "var(--primary-black)",
                border: "1px solid #FFFA46",
                outline: "none",
                borderRadius: "3px",
              }}
              onClick={onCloseModal}
            >
              Yes, I accept
            </button>
          </div>
        </div>
      </Modal>
      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .modal-wrapper {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        @media (min-width: 1024px) {
          .modal-wrapper {
            flex-direction: row;
          }
        }
      `}</style>
    </Main>
  );
}
