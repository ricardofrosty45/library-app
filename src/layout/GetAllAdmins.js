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

  const fetchUsers = () =>{
    axios.get("http://localhost:8080/v1/admin/all").then(res =>{
        console.log(res);
        setBooks(res.data);
    });
  };
  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Content title="Home">
        <Typography variant="h5" className={classes.typography}>
          Admins
        </Typography>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">E-mail</TableCell>
            <TableCell align="right">Profile</TableCell>
            <TableCell align="right">Created Time</TableCell>
            <TableCell align="right">Rented Books</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((booksRow) => (
            <TableRow>
              <TableCell component="th" scope="row">
                {booksRow.id}
              </TableCell>
              <TableCell align="right">{booksRow.name}</TableCell>
              <TableCell align="right">{booksRow.email}</TableCell>
              <TableCell align="right">{booksRow.profile}</TableCell>
              <TableCell align="right">{booksRow.createdTime}</TableCell>
              <TableCell align="right">
            {booksRow.rentedBooks.map((rentedBooksRow) => (
            <TableRow>
                <TableCell align="right">Book Id</TableCell>
              <TableCell component="th" scope="row">
                {rentedBooksRow.id}
              </TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">{rentedBooksRow.title}</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">{rentedBooksRow.category}</TableCell>
            </TableRow>
           ))}


              </TableCell>


            

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