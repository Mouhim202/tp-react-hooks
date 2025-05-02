import React from "react";

function Pagination({ currentPage, itemsPerPage, totalProducts, paginate }) {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  if (totalPages <= 1) return null;

  return (
    <nav>
      <ul className="pagination justify-content-center mt-3">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <button onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
