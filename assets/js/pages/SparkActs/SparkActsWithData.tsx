import React, { useCallback, useState } from 'react';
import { Box, Button, Snackbar } from '@mui/material';
import {
  useSparkActs,
  SparkActListResponse,
  createSparkAct,
  SparkActsTable,
  deleteSparkAct,
  updateSparkAct,
  SparkActForm
} from '../../components/SparkAct';

import { SparkActItem } from '../../api-types/sparkAct';

export const SparkActsWithData = () => {
  const { data, isLoading, error, reload } = useSparkActs();
  const [showForm, setShowForm] = useState(false);
  const [messages, setMessages] = useState<String[]>([]);
  const [updateData, setUpdateData] = useState({});

  const resp = data as SparkActListResponse;
  console.log(data);

  const onNew = useCallback(() => {
    setShowForm(!showForm);
  }, [showForm]);

  const handleFormSave = useCallback(async (formData: SparkActItem) => {
    setMessages([...messages, 'A spark act is saved 😍']);
    const resp = await createSparkAct(formData);
    if (resp) {
      setShowForm(!showForm);
      reload();
    }
  }, [reload, showForm]);

  const handleFormUpdate = useCallback(async (id: number, formData: SparkActItem) => {
    setMessages([...messages, 'A spark act is updated 😊']);
    const resp = await updateSparkAct(id, formData);
    if (resp) {
      setShowForm(!showForm);
      reload();
    }
  }, [reload, showForm]);

  const onDelete = useCallback(async (id: number) => {
    setMessages([...messages, 'A spark act is deleted 😭']);
    const resp = await deleteSparkAct(id);
    if (resp) {
      reload();
      return resp;
    }
  }, [reload]);

  const onEdit = useCallback(async (id: number, attrs: SparkActItem) => {
    setUpdateData(attrs);
    setShowForm(!showForm);
  }, []);

  const handleCancel = () => {
    console.log('cancel in parent');
    setShowForm(!showForm);
  };

  const handleCloseSnackbar = () => {
    setMessages([]);
  };

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
      {showForm && (
        <SparkActForm
          onSave={handleFormSave}
          onUpdate={handleFormUpdate}
          onCancel={handleCancel}
          formData={updateData || {}}
        />
      )}
    </Box>
    <SparkActsTable
      rows={resp.sparkActs}
      isLoading={isLoading}
      onDelete={onDelete}
      onEdit={onEdit}
    />
    <Snackbar
      open={messages.length > 0}
      autoHideDuration={3000}
      message={messages.length > 0 && messages[0]}
      onClose={handleCloseSnackbar}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    />
   </Box>
  ) : (
   <span>Loading... </span>
  );
}
