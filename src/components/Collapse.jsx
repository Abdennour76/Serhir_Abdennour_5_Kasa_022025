import React, { useState } from "react";

const Collapse = ({ title, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div className="collapse-header">
        <h5 className="collapse-title">{title}</h5>
        <span
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          onClick={toggleCollapse}
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
};

export default Collapse;
