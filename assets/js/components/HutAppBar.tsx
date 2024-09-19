import React from 'react';
import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export const HutAppBar = (): JSX.Element => (
  <AppBar position='fixed'>
    <Toolbar>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        Spark Acts
      </Typography>
      <Button color='inherit'>Info</Button>
    </Toolbar>
  </AppBar>
);
