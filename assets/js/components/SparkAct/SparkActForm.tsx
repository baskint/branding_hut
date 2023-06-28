import React, { useState, useEffect, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import {
  Grid,
  Box,
  TextField,
  Button,
  Snackbar,
  InputAdornment,
} from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { SparkActItem } from '../../api-types/sparkAct';
import { ActDateTime } from './styles';

interface SparkActFormProps {
  onSave: (formData: SparkActItem) => void;
}

export const SparkActForm = ({ onSave }: SparkActFormProps) => {
  const {
    register,
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<SparkActItem>({
    defaultValues: {
      actDateTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    },
  });

  const [showSnackbar, setShowSnackbar] = useState(false);

  const onSubmit = useCallback(async (data: SparkActItem) => {
    setShowSnackbar(true);
    onSave(data);
  }, [onSave]);

  const handleCloseSnackbar = () => {
    setShowSnackbar(false);
  };

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  const [value, setValue] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    // Generate random numbers
    const randomValues = {
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
    reset(randomValues);
  }, []);

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
                    value={value}
                    sx={{ width: '100%' }}
                    onChange={(newValue) => setValue(newValue)}
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
          <Button variant='contained' type='submit'>
            Save
          </Button>
        </Box>
        <Snackbar
          open={showSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message="A spark act is saved - nice work!"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        />
      </Box>
    </form>
  );
};
