import React, { useCallback, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { SparkActListResponse } from './types';
import { SparkActsTable } from './SparkActsTable';
import { SparkActForm } from '../../components/SparkAct/SparkActForm';

export const SparkActsWithData = () => {
  const { data, isLoading, error } = useSparkActs();
  const [showForm, setShowForm] = useState(false);
  const resp = data as SparkActListResponse;

  const onNew = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]);


  return resp ? (
   <Box sx={{ mt: 10 }}>
    <Box display="flex" justifyContent="flex-end" sx={{ m: 1}}>
      <Button variant="contained" onClick={onNew}>New</Button>
    </Box>
    <Box sx ={{
        backgroundColor: '#D0F0C0',
        p: 1, // Add padding if desired
        borderRadius: 0, // Add border radius if desired
      }}
    >
      {showForm && <SparkActForm />}
    </Box>
    <SparkActsTable
      rows={resp.sparkActs}
      isLoading={isLoading}
    />
   </Box>
  ) : (
   <span>Loading... </span>
  );
}

