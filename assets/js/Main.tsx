import React from 'react';
import { 
  Box, 
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
 } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
interface MainProps {
  name: string;
}

export const Main = (props: MainProps): JSX.Element  => {
  const name = props.name;
  return (
    <Box sx={{mt: 8}}>{name}</Box>
  );
};
