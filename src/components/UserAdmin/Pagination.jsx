// src/components/Admin/UsersAdmin/Pagination.jsx
import React from 'react';
import { PaginationWrapper, PaginationButton, PageNumber } from './UsersAdminStyles';

const Pagination = ({ table }) => {
  return (
    <PaginationWrapper>
      <PaginationButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        Previous
      </PaginationButton>
      <PageNumber>
        Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </PageNumber>
      <PaginationButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        Next
      </PaginationButton>
    </PaginationWrapper>
  );
};

export default Pagination;