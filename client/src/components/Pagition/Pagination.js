import React from "react";
import "./Pagination.css";

function Pagination({ dogsPerPage, totalItems, currentPage, onPageChange }) {
  const pageNumbers = [];

  // Calcula el número total de páginas
  const totalPages = Math.ceil(totalItems / dogsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination___container">
      <ul className="pagination">
        <li
          className="page-item page-item-left"
          onClick={() => onPageChange(1)}
        >
          Primero
        </li>
        <li
          className="page-item page-item-left"
          onClick={() => onPageChange(currentPage != 1 ? currentPage - 1 : 1)}
        >
          Anterior
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button
              className={`page-link ${currentPage === number ? "active" : ""}`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        <li
          className="page-item page-item-right"
          onClick={() =>
            onPageChange(
              currentPage != totalPages ? currentPage + 1 : totalPages
            )
          }
        >
          Siguiente
        </li>
        <li
          className="page-item page-item-right"
          onClick={() => onPageChange(totalPages)}
        >
          Último
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
