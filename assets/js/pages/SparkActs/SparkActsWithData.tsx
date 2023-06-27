import React, { useCallback, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useSparkActs } from './useSparkActs';
import { SparkActListResponse } from './types';
import { createSparkAct } from '../../components/SparkAct/createSparkAct';
import { SparkActsTable } from './SparkActsTable';
import { SparkActForm } from '../../components/SparkAct/SparkActForm';
import { SparkActItem } from '../../api-types/sparkAct';
import deleteSparkAct from '../../components/SparkAct/deleteSparkAct';

export const SparkActsWithData = () => {
  const { data, isLoading, error, reload } = useSparkActs();
  const [showForm, setShowForm] = useState(false);
  const resp = data as SparkActListResponse;

  const onNew = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]);

  const handleFormSave = useCallback(async (formData: SparkActItem) => {
    const resp = await createSparkAct(formData);
    if (resp) {
      setShowForm(!showForm);
      reload();
    }
  }, [reload, showForm]);

  const onDelete = useCallback(async (id: number) => {
    const resp = await deleteSparkAct(id);
    if (resp) {
      reload();
    }
  }, [reload]);

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
      {showForm && <SparkActForm onSave={handleFormSave} />}
    </Box>
    <SparkActsTable
      rows={resp.sparkActs}
      isLoading={isLoading}
      onDelete={onDelete}
      onEdit={() => Promise.resolve(false)}
    />
   </Box>
  ) : (
   <span>Loading... </span>
  );
}
