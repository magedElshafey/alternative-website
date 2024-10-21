import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the screen is mobile size (for example, less than 768px)
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <div className="w-full flex justify-center">
      <ReactPaginate
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={isMobile ? 1 : 5} // Show 1 page range on mobile, 5 on larger screens
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
