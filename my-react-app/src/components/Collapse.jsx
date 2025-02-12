import React, { useState } from "react";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h5 className="collapse-title">{title}</h5>
        <span
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          onClick={toggleCollapse}
        ></span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Collapse;
