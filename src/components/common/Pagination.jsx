import React from "react";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";

const Pagination = ({
  itemsPerPage,
  totalItems,
  onPageChange,
  currentPage,
}) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (event) => {
    onPageChange(event.selected);
  };

  return (
    <div className="w-full flex justify-center">
      <ReactPaginate
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        subContainerClassName={"pages pagination"}
        forcePage={currentPage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        nextLabel={null}
        previousLabel={null}
      />
    </div>
  );
};

export default Pagination;
