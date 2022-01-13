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
  Button,
} from '@material-ui/core';
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


const OneClientOutGoing = () => {
   const [searchValue, setSearchValue] = useState('');
   const [result, setResult] = useState([]);
  const classes = useStyles();
  const params = new URLSearchParams([['id', searchValue]]);
  
  
  const fetchClientSpendings = () =>{
   axios.get(`https://virtual-store-project-back-end.herokuapp.com/v1/spendings/search/one?id=${searchValue}`).then(res =>{
        console.log(res);
        console.log(res.data);
        console.log(res.data.outgoing);
        setResult(res.data.outgoing);
    }).catch((error) => { console.log(error) })

    console.log(searchValue,"123");
  };


  


  const onChangeHandler  = (e) =>{
    setSearchValue(e.target.value);
    console.log(searchValue,"555");
  }


  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          Client Outgoing
        </Typography>
        <Button className='button' variant="contained" color="secondary" onClick={fetchClientSpendings}>
                 Search For A Client Outgoing - Inform OutGoing Id
           </Button>
           <form className={classes.root} noValidate autoComplete="off">
           <input value={searchValue} onChange={onChangeHandler}/>
           </form>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Outgoing Id</TableCell>
            <TableCell align="right">Client Id</TableCell>
            <TableCell align="right">Client Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Today's Date Spendings</TableCell>
            <TableCell align="right">tags</TableCell>
            <TableCell align="right">clientSpendings</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow key={result.name}>
              <TableCell component="th" scope="row">
                {result.id}
              </TableCell>
              <TableCell align="right">{result.clientId}</TableCell>
              <TableCell align="right">{result.clientName}</TableCell>
              <TableCell align="right">{result.description}</TableCell>
              <TableCell align="right">{result.todaysDateSpendings}</TableCell>
              <TableCell align="right">{result.tags}</TableCell>
              <TableCell align="right">R$ {result.clientSpendings}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Content>
    </React.Fragment>
  );
};

export default OneClientOutGoing;