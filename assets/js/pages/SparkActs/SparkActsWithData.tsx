import React from 'react';
import { Box } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { SparkActListResponse } from './types';
import { SparkActsTable } from './SparkActsTable';

export const SparkActsWithData = () => {
  console.log('with data');
  const { data, isLoading, error } = useSparkActs();
  const resp = data as SparkActListResponse;

  console.log(resp && resp.sparkActs);

  return resp ? (
   <Box>
    <SparkActsTable
      rows={resp.sparkActs}
      isLoading={isLoading}
    />
   </Box>
  ) : (
   <span>Loading... </span>
  );
}

