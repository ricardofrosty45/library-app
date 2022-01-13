import React, { useState, useEffect } from 'react';
import axios from "axios";
import {
  CssBaseline,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  makeStyles,
  Paper,
} from '@material-ui/core';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { Content } from '../components/Content';

const useStyles = makeStyles(() => ({
    typography: {
      marginTop: 20,
    },
    item: {
      display: 'inline-flex',
      flexDirection: 'column',
    },
  }));



const Home = () => {
  const classes = useStyles();

  const history = useHistory();

  const routeChangeGetBooks = () =>{ 
    let path = '/user/books'; 
    history.push(path);
  }

  const routeChangeRentBook = () =>{ 
    let path = '/user/book/rent'; 
    history.push(path);
  }

  const routeChangeReturnBook = () =>{ 
    let path = '/user/book/return'; 
    history.push(path);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          User Profile - Choose Your Action
        </Typography>
        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
    <React.Fragment>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Menu
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={routeChangeRentBook}>Rent Book</MenuItem>
        <MenuItem onClick={routeChangeReturnBook}>Return a book</MenuItem>
        <MenuItem onClick={routeChangeGetBooks}>Consult All Avaliable Books</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
       
      </Content>
    </React.Fragment>
  );
};

export default Home;