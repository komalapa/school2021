import React, { FC, useState } from "react";
import { carsPerPage } from "../../constants";

import "./pagination.css";

interface PaginationProps {
  page?: number;
  count: number;
  onChange: CallableFunction;
}

const Pagination: FC<PaginationProps> = ({ page, count, onChange }) => {
  const pagesCount = Math.ceil(count / carsPerPage);

  const [curPage, setCurPage] = useState<number>(
    page ? (page < 0 ? pagesCount : page) : 1
  );

  function changePage(direction: string, page?: number) {
    if (page) {
      onChange("", page);
      setCurPage(page);
      return;
    }
    onChange(direction);
    if (direction === "next") setCurPage(curPage + 1);
    if (direction === "prev") setCurPage(curPage - 1);
  }

  if (curPage > pagesCount && curPage !== 1) changePage("prev");

  return (
    <div className="pagination">
      {curPage > 1 && (
        <button className="pagination-button" onClick={() => changePage("", 1)}>
          first
        </button>
      )}
      <button
        className="pagination-button"
        onClick={() => changePage("prev")}
        disabled={curPage <= 1}
      >
        prev
      </button>
      <span className="pagination-page">
        {curPage}/{pagesCount}
      </span>
      <button
        className="pagination-button"
        onClick={() => changePage("next")}
        disabled={curPage >= pagesCount}
      >
        next
      </button>
      {curPage < pagesCount && (
        <button
          className="pagination-button"
          onClick={() => changePage("", pagesCount)}
        >
          last
        </button>
      )}
    </div>
  );
};

export default Pagination;
