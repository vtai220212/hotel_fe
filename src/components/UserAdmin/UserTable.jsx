import React from 'react';
import { flexRender } from '@tanstack/react-table';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import {
  TableWrapper,
  Table,
  Th,
  Td,
  Tr,
  CardWrapper,
  Card,
  CardField,
} from './styles/UserTableStyles';

const UserTable = ({ table }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <TableWrapper>
      {isMobile ? (
        <CardWrapper>
          {table.getRowModel().rows.map(row => (
            <motion.div
              key={row.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                {row.getVisibleCells().map(cell => {
                  if (cell.column.id === '_id') return null;
                  return (
                    <CardField key={cell.id}>
                      <strong>{cell.column.columnDef.header}:</strong>{' '}
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </CardField>
                  );
                })}
              </Card>
            </motion.div>
          ))}
        </CardWrapper>
      ) : (
        <Table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <Tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <Th key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                ))}
              </Tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <motion.tr
                key={row.id}
                as={Tr}
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
      )}
    </TableWrapper>
  );
};

export default UserTable;