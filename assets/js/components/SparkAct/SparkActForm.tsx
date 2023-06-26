import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';
import { TextField, FormControl } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

import { SparkActItem } from '../../api-types/sparkAct';
import { ActDateTime } from './styles';

export const SparkActForm = () => {
  console.log('form implementation');
  const {
    register,
    control,
    formState: { isDirty, isValid },
    handleSubmit,
    reset,
  } = useForm<SparkActItem>({
    defaultValues: {
      actDateTime: format(new Date(), 'yyyy-MM-dd hh:mm:ss')
    }
  });
  const [value, setValue] = useState<Dayjs | null>(dayjs());

  return (
    <form
      autoComplete="off"
      onSubmit={() => console.log('saving')}
    >
      <Box sx={{ minWidth: '500px' }}>
        <Grid container spacing={1}>
          <ActDateTime item xs={12}>
            <Controller
              name="actDateTime"
              control={control}
              render={({ field }) => (
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateTimePicker
                    label="Act Date Time"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </LocalizationProvider>
              )}
            />
          </ActDateTime>
          <Grid item xs={12} sm={3}>
            <Controller
              name="bounceRate"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Bounce Rate"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="clickThruRate"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Click Thru Rate"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="cpa"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="CPA"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="jottings"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Jottings"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="messages"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Messages"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="palavers"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Palavers"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="viewThrough"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="View Through"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Controller
              name="yells"
              control={control}
              defaultValue={0}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Yells"
                  type="number"
                  required
                />
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </form>
  );
}
