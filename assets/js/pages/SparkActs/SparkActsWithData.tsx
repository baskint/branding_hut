import React, { useCallback, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { createSparkAct } from './createSparkAct';
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

  const onSubmit = useCallback(async () => {
     const resp = await createSparkAct();
     console.log('response: ', resp);
  }, []);

  return resp ? (
   <Box sx={{ mt: 12 }}>
    <Box display="flex" justifyContent="flex-end" sx={{ mt: 2, mr: 2}}>
      <Button variant="contained" onClick={onNew}>New</Button>
    </Box>
    {showForm && <SparkActForm />}
    <SparkActsTable
      rows={resp.sparkActs}
      isLoading={isLoading}
    />
    <Box display="flex" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
      <Button variant="contained" onClick={onSubmit}>Submit</Button>
    </Box>
   </Box>
  ) : (
   <span>Loading... </span>
  );
}

