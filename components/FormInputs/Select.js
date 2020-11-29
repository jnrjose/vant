import React, { useState, useEffect } from "react";
import SelectDropdown from "../../vectors/angle-down.svg";

const SelectField = (props) => {
  const [active, setActive] = useState(false);
  const [field, setField] = useState();

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setActive(!active);
  };

  const changeValue = (value, dropdown = false) => {
    setField(dropdown ? value : props.value);
    setActive(false);
    dropdown && props.handleChange({ target: { value } });
  };

  useEffect(() => {
    window.addEventListener("click", changeValue);
    return () => window.removeEventListener("click", changeValue);
  }, []);

  const { options, value, name } = props;

  return (
    <div className={`select-component`}>
      <div className="select-current" onClick={toggleDropdown}>
        <input id={name} value={value || "Select Enquiry type"} name={name} />
        <SelectDropdown />
      </div>
      <ul className={`select-items  ${active ? "active" : ""}`}>
        {options.map((option, index) => (
          <li key={index} onClick={() => changeValue(option, true)}>
            {option}
          </li>
        ))}
      </ul>
      <style jsx>{`
        .select-component {
          border: 1px solid #4f4f4f;
          background: var(--main-bg-color);
          height: 4.2rem;
          position: relative;
          margin-top: 1.5rem;
        }

        .select-current {
          display: flex;
          justify-content: space-between;
          align-items: space-between;
          color: #454647;
          padding: 1rem 1.5rem 0.6rem 1.5rem;
          font-size: 1.6rem;
        }
        .select-current input {
          font-family: "GT Eesti Pro Text Book";
          font-size: 1.4rem;
          background: var(--main-bg-color);
          border: none;
          color: #454647;
        }
        .select-items {
          position: absolute;
          bottom: -9.5rem;
          background-color: #f2f2f2;
          width: 100%;
          font-size: 1.4rem;
          display: none;
          border: 1px solid #bdbdbd;
        }
        .select-items.active {
          display: block;
        }
        .select-items li {
          border-bottom: 1px solid #bdbdbd;
          padding: 1rem 1.2rem 0.6rem 1.8rem;
          height: 3rem;
        }
        .select-items li:hover {
          background-color: var(--primary-color);
        }
      `}</style>
    </div>
  );
};

export default SelectField;
// #F2F2F2
