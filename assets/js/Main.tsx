import React from 'react';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';

interface MainProps {
  name: string;
}

export const Main: React.FC<MainProps> = (props: MainProps) => {
  const name = props.name;
  return (
    <Box>
      <Typography variant="h4">{name} with TypeScript / MaterialUI / React!</Typography>
      <Button variant="contained">Ready!</Button>
    </Box>
  );
};
