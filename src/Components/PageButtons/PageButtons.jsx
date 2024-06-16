import React from "react";
import "./PageButtons.scss";

const PageButtons = ({ currentPage, onPageChange }) => {
  const handleRightClick = () => {
    if (currentPage === 3) {
      onPageChange(1);
    } else {
      onPageChange(currentPage + 1);
    }
  };

  const handleLeftClick = () => {
    if (currentPage === 1) {
      onPageChange(3);
    } else {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="page-buttons">
      <button
        className={`page-button left-arrow`}
        onClick={handleLeftClick}
      >
        {"<<"}
      </button>
      {[1, 2, 3].map((page) => (
        <button
          key={page}
          className={`page-button ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`page-button right-arrow`}
        onClick={handleRightClick}
      >
        {">>"}
      </button>
    </div>
  );
};

export default PageButtons;
