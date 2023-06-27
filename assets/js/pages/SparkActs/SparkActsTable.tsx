import React, { useCallback } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { SparkActsTableProps } from './types';

export const SparkActsTable = ({
  rows,
  isLoading,
  onDelete,
  onEdit,
  }: SparkActsTableProps) => {

  const onRowEdit = useCallback(async (id: number) => {
    console.log('editing: ', id);
  }, [onEdit]);

  const onRowDelete = useCallback(async (id: number) => {
    console.log('deleting: ', id);
    onDelete(id);
  }, [onDelete]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Happened On</TableCell>
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
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={9} align='center'>
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, idx) => (
              <TableRow
                key={`${row.actDateTime}-${idx}`}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {format(Date.parse(row.actDateTime), 'M/d/yyyy hh:mma')}
                </TableCell>
                <TableCell align='right'>
                  {Number(row.bounceRate).toFixed(2)}
                </TableCell>
                <TableCell align='right'>
                  {Number(row.clickThruRate).toFixed(2)}
                </TableCell>
                <TableCell align='right'>
                  {Number(row.cpa).toFixed(2)}
                </TableCell>
                <TableCell align='right'>{row.jottings}</TableCell>
                <TableCell align='right'>{row.messages}</TableCell>
                <TableCell align='right'>{row.palavers}</TableCell>
                <TableCell align='right'>
                  {Number(row.viewThrough).toFixed(2)}
                </TableCell>
                <TableCell align='right'>{row.yells}</TableCell>
                <TableCell align='right'>
                  <IconButton onClick={() => onEdit(row.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => onDelete(row.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
