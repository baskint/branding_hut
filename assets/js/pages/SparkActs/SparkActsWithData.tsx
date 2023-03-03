import React from 'react';
import { Box } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { SparkActListResponse } from './types';

export const SparkActsWithData = () => {
  console.log('with data');
  const { data, isLoading, error } = useSparkActs();
  const resp = data as SparkActListResponse;

  return resp ? (
    <Box>
      <p>count: {resp.sparkActs.length}</p>
    </Box>
  ) : (
   <span>Loading... </span>
  );
}

