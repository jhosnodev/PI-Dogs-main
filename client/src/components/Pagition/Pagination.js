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
      <li className="page-item page-item-left">Primero</li>
      <li className="page-item page-item-left">Anterior</li>
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
      <li className="page-item page-item-right">Siguiente</li>
      <li className="page-item page-item-right">Último</li>
      </ul>
    </div>
  );
}

export default Pagination;
