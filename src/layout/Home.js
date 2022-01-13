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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  typography: {
    marginBottom: 20,
  },
  button: {
    textTransform: 'none',
    marginLeft: 5,
  },
});



const Home = () => {
  const classes = useStyles();

  const history = useHistory();

  const routeChangeAdmin = () =>{ 
    let path = '/admin'; 
    history.push(path);
  }

  const routeChangeUser = () =>{ 
    let path = '/user'; 
    history.push(path);
  }

  const routeChangeAnnonymous = () =>{ 
    let path = '/anonymous'; 
    history.push(path);
  }

  const routeChangeBooks= () =>{ 
    let path = '/books'; 
    history.push(path);
  }



  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          Choose Your Profile
        </Typography>
        <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
    <React.Fragment>
      <Button variant="contained" {...bindTrigger(popupState)}>
        Profile Menu
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={routeChangeAdmin}>Admin</MenuItem>
        <MenuItem onClick={routeChangeUser}>User</MenuItem>
        <MenuItem onClick={routeChangeAnnonymous}>Anonymous User</MenuItem>
        <MenuItem onClick={routeChangeBooks}>Books</MenuItem>
      </Menu>
    </React.Fragment>
  )}
</PopupState>
       
      </Content>
    </React.Fragment>
  );
};

export default Home;