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

const GetAllAvaliableBooks = () => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);

  const fetchClientSpendings = () =>{
    axios.get("http://localhost:8080/v1/book").then(res =>{
        console.log(res);
        setBooks(res.data);
    });
  };
  useEffect(() => {
    fetchClientSpendings();
  }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          Books Avaliable
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Id</TableCell>
            <TableCell align="right">Book Title</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((booksRow) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {booksRow.id}
              </TableCell>
              <TableCell align="right">{booksRow.title}</TableCell>
              <TableCell align="right">{booksRow.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Content>
    </React.Fragment>
  );
};

export default GetAllAvaliableBooks;