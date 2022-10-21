import React from "react"
import '../App.css';

const PaginationComponent = ({totalPages, currentPage, setCurrentPage}) => {
  return (<div>
        {
          Array.from(Array(totalPages), (item, index) => {
            return (
              <button
                style={index === currentPage ? { backgroundColor: "gray" } : null}
                className="paginationButton"
                value={index}
                onClick={(e) => setCurrentPage(Number(e.target.value))}>
                {index + 1}
              </button>
            )
          })
        }
      </div>)
}

export default PaginationComponent