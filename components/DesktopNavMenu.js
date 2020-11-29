import React, { Fragment, useState } from "react";
import AngleRightIcon from "../vectors/angleright.svg";
import ActiveLink from "./ActiveLink";
import Values from "../vectors/values.svg";
import Peoples from "../vectors/peoples.svg";
import Overview from "../vectors/overview.svg";

const aboutUsSubmenu = [
  {
    icon: <Overview />,
    header: "Overview",
    body: `We are the leading enterprise solution provider in Nigeria. Our
      consulting company was created to provide high-value services and
      global solutions to organizations in all sectors.`,
    url: "/aboutus/overview",
  },
  {
    icon: <Values />,
    header: "Values & Culture",
    body:
      "Our core values at Vantegral Consulting is the daily guide we follow for success actualization.",
    url: "/aboutus/values",
  },
  {
    icon: <Peoples />,
    header: "People",
    body: `With a diverse group of professionals and experts in various niches
      and industries, Vantegral can boast of an unbeatable workforce.`,
    url: "/aboutus/people",
  },
];

const DesktopNavMenu = ({ displayMenu }) => {
  const [displaySubmenu, setDisplaySubmenu] = useState(false);

  const toggleDropdown = () => {
    setDisplaySubmenu(!displaySubmenu);
  };

  return (
    <Fragment>
      <div className="nav-menu">
        <ul className="nav-menu-list">
          <li className="dropdown nav-menu-list-item">
            <ActiveLink href="/services">Services</ActiveLink>
          </li>
          <li className="dropdown nav-menu-list-item">
            <ActiveLink href="/industries">Industries</ActiveLink>
          </li>
          <li className="nav-menu-list-item">
            <ActiveLink href="/insights">Insights</ActiveLink>
          </li>
          <li
            className="nav-menu-list-item arrow-item"
            onClick={() => toggleDropdown()}
          >
            <ActiveLink>About Us</ActiveLink>
            <AngleRightIcon />
          </li>
          <li className="nav-menu-list-item">
            <ActiveLink href="/contact">Contact</ActiveLink>
          </li>
        </ul>
        {displaySubmenu ? (
          <div className="submenu">
            {aboutUsSubmenu.map((menu, index) => (
              <ActiveLink href={menu.url}>
                <div className="sub-menu-card" key={index}>
                  <div>{menu.icon}</div>
                  <h6>{menu.header}</h6>
                  <p>{menu.body}</p>
                </div>
              </ActiveLink>
            ))}
          </div>
        ) : null}
      </div>
      <style jsx>{`
        .nav-menu {
          display: ${displayMenu ? "flex" : "block"};
          position: fixed;
          top: 90px;
          left: 0;
          width: 100%;
          height: calc(100vh - 90px);
          z-index: 120;
          overflow: hidden;
          background: #141518;
        }
        .nav-menu-list {
          padding-left: 2.5rem;
          margin: 0;
          display: flex;
          flex-direction: column;
          overflow: auto;
          height: 100%;
        }
        .nav-menu-list-item {
          padding: 17.5px 2rem;
        }

        .nav-menu-link {
          display: flex;
          margin-right: 15px;
          text-decoration: none;
          color: #fafafa;
          justify-content: space-between;
          align-items: center;
          font-size: 1.8rem;
        }
        .nav-menu-link:hover,
        .nav-menu-link:focus,
        .nav-menu-link:active {
          color: #fffa46;
        }
        .nav-submenu-list {
          display: block;
          background-color: #141518;
          list-style-type: none;
          padding: 1rem 2rem;
        }

        .nav-submenu-list-item {
          margin: 0;
          border-bottom: 0;
        }

        .submenu-title {
          text-transform: uppercase;
          font-size: 12px;
          color: #fafafa;
          padding: 5px 0;
        }

        .nav-submenu-list-item > a {
          font-size: 12px;
          color: #fafafa;
          width: 100%;
          display: block;
          padding: 15px 0;
          transition: all ease-in-out 0.2s;
        }

        .nav-submenu-list-item > a:hover {
          background-color: #fafafa;
          color: #000;
        }
        .nav-submenu-list-item:hover {
          background-color: #fafafa;
          color: #000;
          text-decoration: underline;
        }
        .nav-submenu-list .dropdown:hover .nav-submenu-list {
          display: block;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 960px) {
          .nav-menu {
            display: grid;
            overflow: unset;
            width: 100%;
            background: transparent;
            height: auto;
            height: calc(100vh - 90px);
            z-index: 120;
            overflow: hidden;
            background: #141518;
            grid-template-columns: 0.3fr 1fr;
          }
          .nav-menu-list {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: auto;
            grid-column: 1;
          }
          .arrow-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .submenu {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            height: 50%;
            grid-column: 2;
            padding: 16rem 5rem;
          }
          .sub-menu-card {
            width: 201px;
            height: 226px;
            background: #2e2e38;
            border-radius: 3.2px;
            padding: 4.1rem 1.9rem 3.9rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .sub-menu-card div {
            margin-bottom: 3.1rem;
          }
          .sub-menu-card h6 {
            margin-bottom: 1.5rem;
            color: #fafafa;
            line-height: 12px;
            text-align: center;
            font-size: 1.1rem;
          }
          .sub-menu-card p {
            color: #c3c3c3;
            line-height: 12px;
            text-align: center;
            font-size: 0.9rem;
          }
          .nav-submenu-list {
            position: absolute;
            top: 3rem;
            padding: 5px 0;
            width: 100px;
            margin-bottom: 0;
            margin-top: 1.5rem;
            margin-right: 1rem;
          }
          .submenu-title {
            font-size: 8px;
            padding: 10px;
          }
          .nav-submenu-list-item > a {
            font-size: 14px;
            padding: 10px;
          }
          .nav-submenu-list-item:hover {
            text-decoration: none;
            background-color: #fafafa;
            color: #000;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default DesktopNavMenu;
