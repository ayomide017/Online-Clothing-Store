import React from "react"
// import { ArrowRight, ArrowLeft } from "app/assets/svg"
import {FaArrowLeft, FaArrowRight} from "react-icons/fa"

const Pagination = ({
  currentPage,
  totalPages,
  pageSize,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalPages / pageSize)

  const visiblePageCount = 10

  let startPage = Math.max(1, currentPage - Math.floor(visiblePageCount / 2))
  let endPage = Math.min(startPage + visiblePageCount - 1, pageCount)

  if (endPage === pageCount) {
    startPage = Math.max(1, endPage - visiblePageCount + 1)
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index,
  )

  return (
    <div className="pagination">
      <div
        className={`arrow ${currentPage === 1 ? "disable_arrow" : "none"}`}
      >
        
        <FaArrowLeft
          onClick={() => onPageChange(currentPage - 1)}
        />
      </div>

      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`pagination_pages ${
            currentPage === pageNumber ? "active_page" : ""
          }`}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}

      <div
        className={`arrow ${
          currentPage === pageCount ? "disable_arrow" : "none"
        }`}
      >
        
        <FaArrowRight
          onClick={() => onPageChange(currentPage + 1)}
        />
      </div>
    </div>
  )
}

export default Pagination
