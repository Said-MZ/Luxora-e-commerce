import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const OrdersPagination = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-sm sm:btn-md join-item ${
          activeClass ? "btn-neutral" : ""
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    if (page > 2) {
      pageButtons.push(
        <span key="d1" className="btn btn-sm sm:btn-md join-item">
          ...
        </span>
      );
    }

    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    if (pageCount > 2) {
      pageButtons.push(
        <span key="d2" className="btn btn-sm sm:btn-md join-item">
          ...
        </span>
      );
      pageButtons.push(
        addPageButton({
          pageNumber: pageCount,
          activeClass: page === pageCount,
        })
      );
    }
    return pageButtons;
  };

  if (pageCount < 2) {
    return null;
  }
  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button
          className="btn btn-sm sm:btn-md join-item"
          onClick={() => {
            let prevPage = page - 1;
            if (prevPage < 1) prevPage = pageCount;
            handlePageChange(prevPage);
          }}
        >
          ❮
        </button>
        {renderPageButtons()}
        <button
          className="btn btn-sm sm:btn-md join-item "
          onClick={() => {
            let nextPage = page + 1;
            if (nextPage > pageCount) nextPage = 1;
            handlePageChange(nextPage);
          }}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default OrdersPagination;
