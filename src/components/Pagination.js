import React from "react";

const Pagination = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
  const pageNumbers = [];

  // Sayfa numaralarını hesapla
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Önceki ve sonraki sayfa işlemleri
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageNumbers.length) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {/* Önceki buton */}
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            onClick={handlePrevious}
            className="page-link"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>

        {/* Sayfa numaraları */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button
              onClick={() => onPageChange(number)}
              className="page-link"
            >
              {number}
            </button>
          </li>
        ))}

        {/* Sonraki buton */}
        <li
          className={`page-item ${currentPage === pageNumbers.length ? "disabled" : ""}`}
        >
          <button
            onClick={handleNext}
            className="page-link"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
