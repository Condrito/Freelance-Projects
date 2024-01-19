// CustomSelect.jsx
import React from "react";
import "./CustomSelect.css";

const CustomSelect = ({ name, value, onChange, options }) => {
  return (
    <div className="custom-select">
      <div className="custom-select-trigger">
        <span>{value || options[0]}</span>
        <div className="arrow"></div>
      </div>
      <div className="custom-options">
        {options.map((option, index) => (
          <div
            key={index}
            className={`custom-option ${value === option ? "selected" : ""}`}
            onClick={() => onChange({ target: { name, value: option } })}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
