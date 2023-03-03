import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';

import { SparkActsTableProps } from './types';

export const SparkActsTable = ({ rows, isLoading }: SparkActsTableProps) => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label='simple table'>
      <TableHead>
        <TableRow>
          <TableCell>Act Date</TableCell>
          <TableCell align='right'>Bounce Rate</TableCell>
          <TableCell align='right'>Click Thru Rate</TableCell>
          <TableCell align='right'>CPA</TableCell>
          <TableCell align='right'>Jottings</TableCell>
          <TableCell align='right'>Messages</TableCell>
          <TableCell align='right'>Palavers</TableCell>
          <TableCell align='right'>View Through</TableCell>
          <TableCell align='right'>Yells</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.actDateTime}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component='th' scope='row'>
              {format(Date.parse(row.actDateTime), 'M/d/yyyy hh:mma')}
            </TableCell>
            <TableCell align='right'>{row.bounceRate}</TableCell>
            <TableCell align='right'>{row.click_thru_rate}</TableCell>
            <TableCell align='right'>{row.cpa}</TableCell>
            <TableCell align='right'>{row.jottings}</TableCell>
            <TableCell align='right'>{row.messages}</TableCell>
            <TableCell align='right'>{row.palavers}</TableCell>
            <TableCell align='right'>{row.view_through}</TableCell>
            <TableCell align='right'>{row.yells}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
