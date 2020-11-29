import React, { useState } from "react";
import TextField from "./FormInputs/TextField";
import ArrowRight from "../vectors/arrow-right-black.svg";
import ClearText from "../vectors/cleartext.svg";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");

  const onSearchTextHandler = (e) => {
    setSearchText(e.target.value);
  };
  const searchResults = [
    {
      searchresultImage: "/searchresultpic1.png",
      header: "gcfghjnkjhgvjnkm",
      text:
        "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      searchresultImage: "/searchresultpic2.png",
      header: "gcfghjnkjhgvjnkm",
      text:
        "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      searchresultImage: "/searchresultpic3.png",
      header: "gcfghjnkjhgvjnkm",
      text:
        "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      searchresultImage: "/searchresultpic4.png",
      header: "gcfghjnkjhgvjnkm",
      text:
        "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      searchresultImage: "/searchresultpic5.png",
      header: "gcfghjnkjhgvjnkm",
      text:
        "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      searchresultImage: "/searchresultpic2.png",
      header: "gcfghjnkjhgvjnkm",
      text:
        "We help our client...It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <section className="search-container">
      <div className="input-container">
        <TextField
          margintop="0rem"
          height="100%"
          handleChange={onSearchTextHandler}
          value={searchText}
        />
        <div
          onClick={() => setSearchText("")}
          style={{
            position: "absolute",
            width: "2.5rem",
            height: "2.5rem",
            backgroundColor: "#2E2E38",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            right: "10rem",
            bottom: "2rem",
          }}
        >
          <ClearText />
        </div>
        <button>
          <ArrowRight
            style={{ width: "2rem", height: "2rem", color: "#000" }}
          />
        </button>
      </div>
      <div className="searchresults-container">
        {searchResults.map((searchResult, index) => (
          <div className="searchresults" key={index}>
            <img src={searchResult.searchresultImage} />
            <div className="searchtext-container">
              <h6>{searchResult.header}</h6>
              <p>{searchResult.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <p>Showing result 1 - 10 of 80</p>
        <div className="pagination-button-container">
          <div className="previous">
            <button>Previous</button>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            {[1, 2, 3, 4].map((data, index) => (
              <div key={index} className="small-buttons">
                <button>{`${data}`}</button>
              </div>
            ))}
          </div>
          <div className="next">
            <button>Next</button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .pagination-container {
          display: none;
        }
        .search-container {
          margin: 6.6rem 2rem 7rem;
          background: var(--main-bg-color);
        }
        .input-container {
          display: grid;
          grid-template-columns: 1fr 0.3fr;
          height: 6.3rem;
          position: relative;
        }
        button {
          background: var(--primary-grey);
          width: 100%;
          height: 100%;
          border: none;
          margin-left: 1.3rem;
        }
        .searchresults-container {
          margin-top: 8.2rem;
        }
        .searchresults {
          margin-bottom: 6rem;
        }
        .searchresults img {
          width: 100%;
          height: 100%;
        }
        .searchresults-container h6 {
          font-size: 1.8rem;
          line-height: 18px;
          color: var(--primary-color);
          margin: 2.9rem 0rem 2.1rem;
        }
        .searchresults-container p {
          color: var(--primary-grey);
          line-height: 150%;
          font-size: 1.8rem;
        }
      `}</style>
      <style jsx>{`
        @media (min-width: 1024px) {
          .input-container {
            display: grid;
            grid-template-columns: 1fr 5.4rem;
          }
          .search-container {
            margin: 8.3rem 13.8rem 13.1rem 10rem;
          }

          .searchresults {
            display: flex;
            border-bottom: 1px solid #000;
            padding-bottom: 2.2rem;
            margin-bottom: 2.2rem;
          }
          .searchresults img {
            width: 17.6rem;
            height: 13.3rem;
            margin-right: 3.4rem;
          }
          .searchtext-container {
            width: 95rem;
          }
          .searchtext-container h6 {
            color: var(--contactform-font-color);
            font-size: 2.4rem;
            margin-bottom: 2.1rem;
          }
          .searchtext-container p {
            color: var(--contactform-font-color);
            line-height: 120%;
            font-size: 1.6rem;
          }
          .pagination-container {
            margin-top: 8.7rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .pagination-container p {
            color: #616267;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 17px;
          }
          .pagination-button-container {
            display: flex;
            flex-direction: row;
            align-items: center;
          }
          .pagination-button-container button {
            border: 1px solid #abb3bf;
            border-radius: 0.3rem;
            width: 100%;
            height: 100%;
            background: #1f2023;
            color: #abb3bf;
          }
          .previous,
          .next {
            width: 14.1rem;
            height: 4rem;
          }
          .small-buttons {
            width: 3.6rem;
            height: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SearchPage;
