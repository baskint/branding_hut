import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { format } from 'date-fns';
import { Grid, Box } from '@mui/material';
import { TextField } from '@mui/material';
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
        </Grid>
      </Box>
    </form>
  );
}
