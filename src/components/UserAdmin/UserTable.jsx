// frontend/src/components/UserAdmin/UserTable.jsx
import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { motion } from 'framer-motion'; // Thêm Framer Motion
import {
  TableWrapper,
  Table,
  Th,
  Td,
  Tr,
} from './UserAdminStyles';

const UserTable = ({ table }) => {
  return (
    <TableWrapper>
      <Table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </Th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <motion.tr
              key={row.id}
              as={Tr} // Sử dụng styled component Tr
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {row.getVisibleCells().map(cell => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </Table>
    </TableWrapper>
  );
};

export default UserTable;