import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IJourney } from '../../../hooks/useJourneyDetails';

interface ITableProps {
  tableData: IJourney[];
}

export default function DenseTable({ tableData }: ITableProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Departure station</TableCell>
            <TableCell align="left">Returhn Station</TableCell>
            <TableCell align="right">Covered Distance&nbsp;(mins)</TableCell>
            <TableCell align="right">Duration&nbsp;(km)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.departure_station_name}</TableCell>
              <TableCell align="left">{row.return_station_name}</TableCell>
              <TableCell align="right">{row.covered_distance}</TableCell>
              <TableCell align="right">{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}