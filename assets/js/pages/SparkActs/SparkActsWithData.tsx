import React, { useCallback } from 'react';
import { Box, Button } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { createSparkAct } from './createSparkAct';
import { SparkActListResponse } from './types';
import { SparkActsTable } from './SparkActsTable';
import { SparkActForm } from '../../components/SparkAct/SparkActForm';

export const SparkActsWithData = () => {
  const { data, isLoading, error } = useSparkActs();
  const resp = data as SparkActListResponse;

  const onNew = useCallback(async () => {
     const resp = await createSparkAct();
     console.log('response: ', resp);
  }, []);

  return resp ? (
   <Box sx={{ mt: 12 }}>
    <SparkActForm />
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

