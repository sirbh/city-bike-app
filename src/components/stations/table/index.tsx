import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination } from '@mui/material';
import { StationOptions } from '../../../hooks/useStationSearch';

interface ITableProps {
  tableData: StationOptions[];
  pageChangeHandler: (n: number) => void;
  page: number;
  count: number;
  onRowClick: (option: StationOptions) => void;
}
export default function DenseTable({
  tableData,
  pageChangeHandler,
  page,
  count,
  onRowClick,
}: ITableProps) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Station Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow
                key={row.station_id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell
                  align="left"
                  onClick={() => onRowClick(row)}
                  sx={{
                    cursor: 'pointer',
                    color: 'blue',
                    textDecoration: 'undeline',
                  }}
                >
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        sx={{ display: 'flex', justifyContent: 'center' }}
        rowsPerPageOptions={[10]}
        component="div"
        align="center"
        count={count}
        rowsPerPage={10}
        page={page - 1}
        onPageChange={(e, n) => {
          pageChangeHandler(n);
        }}
      />
    </>
  );
}
