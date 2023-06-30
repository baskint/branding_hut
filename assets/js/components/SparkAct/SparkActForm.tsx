import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import {
  Grid,
  Box,
  TextField,
  Button,
  InputAdornment,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { isEmpty } from 'lodash';

import { SparkActItem } from '../../api-types/sparkAct';
import { ActDateTime } from './styles';

interface SparkActFormProps {
  onSave: (formData: SparkActItem) => void;
  onUpdate: (id: number, formData: SparkActItem) => void;
  formData: SparkActItem;
  onCancel: () => void;
}

export const SparkActForm = ({ onSave, onUpdate, onCancel, formData }: SparkActFormProps) => {
  const {
    register,
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    getValues,
    reset,
  } = useForm<SparkActItem>({});

  const onSubmit = useCallback(async (data: SparkActItem) => {
    console.log('data: ', data);
    if (isEmpty(formData)) {
      onSave(data);
    } else {
      onUpdate(formData.id, data);
    }
  }, [onSave]);

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  const handleCancel = useCallback(() => {
    console.log('cancelling');
    onCancel();
  }, [onCancel]);

  useEffect(() => {
    // Generate random numbers
    const randomValues = {
      actDateTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
      bounceRate: Math.random() * 10,
      clickThruRate: Math.random() * 10,
      cpa: Math.random(),
      jottings: Math.floor(Math.random() * 10) + 1,
      messages: Math.floor(Math.random() * 10) + 1,
      palavers: Math.floor(Math.random() * 10) + 1,
      viewThrough: Math.random() * 10,
      yells: Math.floor(Math.random() * 1000) + 1,
    };

    // Set the random values as default values
    if (isEmpty(formData)) {
      reset(randomValues);
    } else {
      reset(formData) // don't reset
    }
  }, [formData]);


  return (
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <Box sx={{ minWidth: '500px' }}>
        <Grid container spacing={1}>
          <ActDateTime item xs={12} sm={3}>
            <Controller
              name='actDateTime'
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label='Act Date Time'
                    value={dayjs(field.value)}
                    sx={{ width: '100%' }}
                    onChange={(newValue) => field.onChange(newValue)}
                  />
                </LocalizationProvider>
              )}
            />
          </ActDateTime>
          <Grid item xs={12} sm={3}>
            <Controller
              name='bounceRate'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Bounce Rate'
                  type='number'
                  fullWidth
                  required
                  inputProps={{
                    value: `${Number(field.value).toFixed(2)}`,
                    style: { textAlign: 'right'}
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='clickThruRate'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Click Thru Rate'
                  type='number'
                  required
                  fullWidth
                  inputProps={{
                    value: `${Number(field.value).toFixed(2)}`,
                    style: { textAlign: 'right' }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='cpa'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='CPA'
                  type='number'
                  required
                  fullWidth
                  inputProps={{
                    value: `${Number(field.value).toFixed(2)}`,
                    style: { textAlign: 'right' }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='jottings'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Jottings'
                  type='number'
                  required
                  fullWidth
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  inputProps={{
                    style: { textAlign: 'right' }
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='messages'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Messages'
                  type='number'
                  required
                  fullWidth
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  inputProps={{
                    style: { textAlign: 'right' }
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='palavers'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Palavers'
                  type='number'
                  required
                  fullWidth
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  inputProps={{
                    style: { textAlign: 'right' }
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='viewThrough'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='View Through'
                  type='number'
                  required
                  fullWidth
                  inputProps={{
                    value: `${Number(field.value).toFixed(2)}`,
                    style: { textAlign: 'right' }
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>%</InputAdornment>
                    ),
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name='yells'
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label='Yells'
                  type='number'
                  required
                  fullWidth
                  sx={{ textAlign: 'right' }}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                  inputProps={{
                    style: { textAlign: 'right' }
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          sx={{ mt: 2 }}
        >
          <Button variant='text' onClick={handleCancel} sx={{ mr: 2 }}>
            Cancel
          </Button>
          <Button variant='contained' type='submit'>
            Save
          </Button>
        </Box>
      </Box>
    </form>
  );
};
