import React, { Fragment, useState } from "react";
import Link from "next/link";
import AngleRightIcon from "../vectors/angleright.svg";
import AngleDownIcon from "../vectors/angle-down.svg";
import ActiveLink from "./ActiveLink";

const NavMenu = ({ displayMenu }) => {
  const [displaySubmenu, setDisplaySubmenu] = useState(false);

  const toggleDropdown = (item) => {
    const menu = document.getElementById(item);
    menu.style.display = menu.style.display === "block" ? "none" : "block";
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
          <li className="nav-menu-list-item">
            <ActiveLink href="/aboutus/overview">About Us</ActiveLink>
          </li>
          <li className="nav-menu-list-item">
            <ActiveLink href="/contact">Contact</ActiveLink>
          </li>
        </ul>
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
            display: flex;
            flex-direction: row;
            overflow: unset;
            width: 600px;
            background: transparent;
            height: auto;
            top: 1rem;
            left: 30rem;
          }
          .nav-menu-list {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: auto;
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
          @media (min-width: 1200px) {
            .nav-menu {
              width: 700px;
            }
            .nav-menu-list-item {
              display: flex;
              justify-content: center;
              align-items: center;
              margin-right: 2rem;
            }
          }
        }
      `}</style>
    </Fragment>
  );
};

export default NavMenu;

{
  /*<a
              className="nav-menu-link"
              href="#"
              // onClick={() => toggleDropdown("product-dropdown")}
            >
                          <span>Services</span>
              {displaySubmenu ? <AngleDownIcon/> : <AngleRightIcon/>}
                          
            </a>
          <ul id="product-dropdown" className="nav-submenu-list">
              <li className="submenu-title nav-submenu-list-item">
                Individuals
              </li>
              <li className="nav-submenu-list-item">
                <a href="#" className="nav-menu-link">
                  Lorem
                </a>
              </li>
              <li className="nav-submenu-list-item">
                <a href="#" target="_blank" className="nav-menu-link">
                  Lorem
                </a>
              </li>
  </ul>*/
}
