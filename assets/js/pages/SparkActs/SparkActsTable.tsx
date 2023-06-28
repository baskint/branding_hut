import React, { useCallback, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  Paper,
} from '@mui/material';
import { format } from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { SparkActsTableProps } from './types';
import { SparkActItem } from '../../api-types/sparkAct';

export const SparkActsTable = ({
  rows,
  isLoading,
  onDelete,
  onEdit,
}: SparkActsTableProps) => {
  const [rowToDelete, setRowToDelete] = useState(0);

  const onRowEdit = async (id: number, attrs: SparkActItem) => {
    const resp = await onEdit(id, attrs);
    console.log('resp:', resp);
  };

  const onRowDelete = async () => {
    const resp = await onDelete(rowToDelete);
    if (resp) {
      setRowToDelete(0);
    }
  };

  const onDeleteClick = (id: number) => setRowToDelete(id);

  return (
    <>
      <Modal
        open={rowToDelete !== 0}
        onClose={() => setRowToDelete(0)}>
        <Dialog
          open={rowToDelete !== 0}
          onClose={() => setRowToDelete(0)}
        >
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this Spark Act?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setRowToDelete(0)}>Cancel</Button>
            <Button onClick={onRowDelete}>Delete</Button>
          </DialogActions>
        </Dialog>
      </Modal>
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
                    <IconButton onClick={() => onRowEdit(row.id, row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDeleteClick(row.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
