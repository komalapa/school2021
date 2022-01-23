import React, { FC, useState } from 'react';
import { carsPerPage } from '../../constants';
import { PaginationProps } from '../../types/props';

import './pagination.css';

// eslint-disable-next-line react/function-component-definition
const Pagination: FC<PaginationProps> = ({ page, count, onChange }) => {
  const pagesCount = Math.ceil(count / carsPerPage);

  const [curPage, setCurPage] = useState<number>(
    // eslint-disable-next-line no-nested-ternary
    page ? (page < 0 ? pagesCount : page) : 1,
  );

  function changePage(direction: string, pageTo?: number): void {
    if (pageTo) {
      onChange('', pageTo);
      setCurPage(pageTo);
      return;
    }
    onChange(direction);
    if (direction === 'next') setCurPage(curPage + 1);
    if (direction === 'prev') setCurPage(curPage - 1);
  }

  if (curPage > pagesCount && curPage !== 1) changePage('prev');

  return (
    <div className="pagination">
      {curPage > 1 && (
        <button
          type="button"
          className="pagination-button"
          onClick={() => changePage('', 1)}
        >
          first
        </button>
      )}
      <button
        type="button"
        className="pagination-button"
        onClick={() => changePage('prev')}
        disabled={curPage <= 1}
      >
        prev
      </button>
      <span className="pagination-page">
        {curPage}
        /
        {pagesCount}
      </span>
      <button
        type="button"
        className="pagination-button"
        onClick={() => changePage('next')}
        disabled={curPage >= pagesCount}
      >
        next
      </button>
      {curPage < pagesCount && (
        <button
          type="button"
          className="pagination-button"
          onClick={() => changePage('', pagesCount)}
        >
          last
        </button>
      )}
    </div>
  );
};

export default Pagination;
