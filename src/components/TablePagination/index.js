import React from 'react';
import { Pagination } from 'react-bootstrap'

function TablePagination() {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      <Pagination>{items}</Pagination>
      <br />
    </div>
  )
}

export default TablePagination;