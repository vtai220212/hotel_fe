import React from 'react';
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { TableContainer, HeaderRow, HeaderCell, Row, Cell, CellLabel, CellContent } from '../RoomManagement/styles/RoomTableStyles';

const CategoryList = ({ categories, onEdit, onDelete }) => {
  const columns = [
    {
      header: 'Tên danh mục',
      accessorKey: 'name',
    },
    {
      header: 'Hành động',
      id: 'actions',
      cell: ({ row }) => (
        <CellContent>
          <button onClick={() => onEdit(row.original)} style={{ marginRight: '8px' }}>
            Sửa
          </button>
          <button onClick={() => onDelete(row.original._id)}>
            Xóa
          </button>
        </CellContent>
      ),
    },
  ];

  const table = useReactTable({
    data: categories || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer>
      <HeaderRow>
        {table.getHeaderGroups().map(headerGroup =>
          headerGroup.headers.map(header => (
            <HeaderCell key={header.id}>
              {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
            </HeaderCell>
          ))
        )}
      </HeaderRow>
      {table.getRowModel().rows.map(row => (
        <Row key={row.id}>
          {row.getVisibleCells().map(cell => (
            <Cell key={cell.id}>
              <CellLabel>
                {flexRender(cell.column.columnDef.header, cell.getContext())}
              </CellLabel>
              <CellContent>
                {flexRender(cell.column.columnDef.cell, cell.getContext()) ||
                  flexRender(cell.column.columnDef.accessorFn || cell.getValue, cell.getContext()) ||
                  'N/A'}
              </CellContent>
            </Cell>
          ))}
        </Row>
      ))}
    </TableContainer>
  );
};

export default CategoryList;