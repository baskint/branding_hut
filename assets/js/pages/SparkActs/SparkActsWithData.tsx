import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { SparkActListResponse } from './types';
import { SparkActsTable } from './SparkActsTable';

export const SparkActsWithData = () => {
  const { data, isLoading, error } = useSparkActs();
  const resp = data as SparkActListResponse;

  console.log(resp && resp.sparkActs);

  const onNew = useCallback(async () => {
     await console.log('test');
  }, []);

  return resp ? (
   <Box>
    <SparkActsTable
      rows={resp.sparkActs}
      isLoading={isLoading}
    />
    <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
      <Button variant="contained" onClick={onNew}>New</Button>
    </Box>
   </Box>
  ) : (
   <span>Loading... </span>
  );
}

