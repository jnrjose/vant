import React, { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Link from "next/link";
import { useRouter } from "next/router";
import VantegralHeader from "../vectors/vantegralHeaderWhite.svg";
import SearchIcon from "../vectors/searchIcon.svg";
import MenuIcon from "../vectors/MenuIcon.svg";
import CloseIcon from "../vectors/CloseIcon.svg";
import ActiveLink from "./ActiveLink";
import SearchCloseicon from "../vectors/SearchCloseicon.svg";
import NavMenu from "./NavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayDesktopMenu, setDisplayDesktopMenu] = useState(false);
  const [showSearchbar, setShowSearchBar] = useState(false);
  const [search, setSearch] = useState("");
  const { width } = useWindowSize();
  const { pathname } = useRouter();

  useEffect(() => {
    if (width >= parseInt("960px")) {
      setDisplayMenu(true);
    }
    if (width < parseInt("960px")) {
      setDisplayMenu(false);
    }
  }, [width]);

  const toggleDisplayMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  const toggleDisplayDesktopMenu = () => {
    setDisplayDesktopMenu(!displayDesktopMenu);
  };

  return (
    <header>
      {showSearchbar ? (
        <div className="search-area ">
          <input
            type="text"
            value={search}
            className="search-bar__input gcse-search"
            placeholder="Type to search"
            aria-label="search"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              width: "10rem",
              marginright: "7rem",
              justifyContent: "space-between",
            }}
          >
            <CloseIcon onClick={() => setShowSearchBar(!showSearchbar)} />
            <SearchIcon className="search-icon" />
          </div>
        </div>
      ) : null}
      <Link href="/">
        <div className="company-logo">
          <VantegralHeader style={{ width: "100%", height: "100%" }} />
        </div>
      </Link>

      <div className="header-icons">
        {/*<SearchIcon
          className="search-icons"
          onClick={() => setShowSearchBar(!showSearchbar)}
        />*/}
        <div className="nav-menu-toggle" onClick={toggleDisplayMenu}>
          {displayMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
        <div
          className="nav-menu-toggle-desktop"
          onClick={toggleDisplayDesktopMenu}
        >
          {displayDesktopMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
        {displayDesktopMenu ? (
          <DesktopNavMenu
            displayMenu={displayDesktopMenu}
            toggleDisplayMenu={toggleDisplayDesktopMenu}
          />
        ) : null}

        {(displayMenu &&
          pathname !== "/aboutus/overview" &&
          displayMenu &&
          pathname !== "/aboutus/values" &&
          displayMenu &&
          pathname !== "/aboutus/people") ||
        (displayMenu && pathname === "/aboutus/overview" && width <= "768") ||
        (displayMenu && pathname === "/aboutus/values" && width <= "768") ||
        (displayMenu && pathname === "/aboutus/people" && width <= "768") ? (
          <NavMenu
            toggleDisplayMenu={toggleDisplayMenu}
            displayMenu={displayMenu}
          />
        ) : null}
      </div>
      {pathname === "/aboutus/overview" ||
      pathname === "/aboutus/values" ||
      pathname === "/aboutus/people" ? (
        <div className="nav-submenu-container">
          <ul className="nav-submenu-list">
            <li className="submenu-title nav-submenu-list-item">
              <ActiveLink href="/aboutus/overview">Overview</ActiveLink>
            </li>
            <li className="nav-submenu-list-item">
              <ActiveLink href="/aboutus/values" className="nav-menu-link">
                Values & Culture
              </ActiveLink>
            </li>
            <li className="nav-submenu-list-item">
              <ActiveLink
                href="/aboutus/people"
                target="_blank"
                className="nav-menu-link"
              >
                People
              </ActiveLink>
            </li>
          </ul>
        </div>
      ) : null}
      {(width >= "1024" && pathname === "/aboutus/overview") ||
      (width >= "1024" && pathname === "/aboutus/values") ||
      (width >= "1024" && pathname === "/aboutus/people") ? (
        <div className="nav-submenu-container-desktop">
          <ul className="nav-submenu-list-desktop">
            {pathname === "/aboutus/overview" ? (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p style={{ color: "var(--primary-grey)", fontSize: "1.4rem" }}>
                  About us
                </p>
                <ActiveLink href="/aboutus/overview" className="nav-menu-link">
                  <p style={{ borderTop: "1px solid var(--primary-color)" }}>
                    Overview
                  </p>
                </ActiveLink>
              </div>
            ) : (
              <ActiveLink href="/aboutus/overview" className="nav-menu-link">
                Overview
              </ActiveLink>
            )}
            <li className="nav-submenu-list-item">
              {pathname === "/aboutus/values" ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{ color: "var(--primary-grey)", fontSize: "1.4rem" }}
                  >
                    About us
                  </p>
                  <ActiveLink href="/aboutus/values" className="nav-menu-link">
                    <p style={{ borderTop: "1px solid var(--primary-color)" }}>
                      Values & Culture
                    </p>
                  </ActiveLink>
                </div>
              ) : (
                <ActiveLink href="/aboutus/values" className="nav-menu-link">
                  Values & Culture
                </ActiveLink>
              )}
            </li>
            <li className="nav-submenu-list-item">
              {pathname === "/aboutus/people" ? (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p
                    style={{ color: "var(--primary-grey)", fontSize: "1.4rem" }}
                  >
                    About us
                  </p>
                  <ActiveLink href="/aboutus/people" className="nav-menu-link">
                    <p style={{ borderTop: "1px solid var(--primary-color)" }}>
                      People
                    </p>
                  </ActiveLink>
                </div>
              ) : (
                <ActiveLink href="/aboutus/people" className="nav-menu-link">
                  People
                </ActiveLink>
              )}
            </li>
          </ul>
        </div>
      ) : null}
      <style jsx>{`
        .search-area {
          padding: 3.5rem 2rem 3.7rem;
          background: var(--main-bg-color);
          width: 90%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          position: absolute;
        }
        input {
          background: var(--main-bg-color);
          border: none;
          width: 100%;
          height: 100%;
          color: #fafafa;
          font-size: 1.8rem;
          line-height: 18px;
        }
        .search-icon {
          display: none;
        }
        .search-bar__input {
          font-weight: 350;
          font-size: 1.8rem;
          line-height: 18px;
          font-family: "GT Eesti Pro Text Book";
        }
        header {
          width: 100%;
          top: 0;
          height: 90px;
          background-color: #141518;
          box-shadow: 0px 0px 10px #0a0b0b;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 2rem;
          position: sticky;
          transition: all ease-in-out 0.2s;
          z-index: 120;
        }

        .company-logo {
          width: 100px;
          cursor: pointer;
          opacity: ${showSearchbar ? 0 : 1};
        }
        .header-icons {
          width: 2rem;
          display: ${showSearchbar ? "none" : "flex"};
          justify-content: space-between;
        }
        .nav-submenu-container {
          display: contents;
        }
        .nav-submenu-list {
          position: absolute;
          left: 0;
          top: 90px;
          background-color: #141518;
          display: flex;
          justify-content: space-between;
          width: 100vw;
          height: 50px;
          padding: 1rem 2rem 0.6rem 2rem;
        }
        .nav-menu-toggle-desktop {
          display: none;
        }
        .nav-submenu-container-desktop {
          display: none;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 960px) {
          .search-icon {
            display: block;
          }
          .search-area {
            padding: 3.5rem 2.7rem 3.7rem 5rem;
          }
          .nav-menu-toggle {
            display: none;
          }
          .nav-menu-toggle-desktop {
            display: block;
          }
          .header-icons {
            width: 7rem;
          }

          .company-logo {
            width: 140px;
            height: 50px;
            margin-left: 7rem;
          }
          .nav-submenu-container {
            display: none;
          }
          .nav-submenu-container-desktop {
            display: contents;

            background-color: #141518;
          }
          .nav-submenu-list-desktop {
            position: absolute;
            top: 2rem;
            left: 30rem;
            display: flex;
            justify-content: space-between;
            width: 50rem;
            height: 50px;
            padding: 1rem 2rem 0.6rem 2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
