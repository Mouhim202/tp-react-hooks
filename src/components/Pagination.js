import React from "react";

function Pagination({ currentPage, itemsPerPage, totalProducts, paginate, isDarkTheme }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <nav>
      <ul
        className={`pagination justify-content-center mt-3 ${
          isDarkTheme ? "bg-dark text-light" : ""
        }`}
      >
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""} ${
              isDarkTheme ? "border-light" : "border-dark"
            }`}
          >
            <button
              onClick={() => paginate(number)}
              className={`page-link ${isDarkTheme ? "bg-dark text-light" : "bg-light text-dark"}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
