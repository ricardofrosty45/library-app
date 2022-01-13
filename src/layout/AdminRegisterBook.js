import React, { useState } from 'react';
import { makeStyles, Button, Typography } from '@material-ui/core';
import { Content } from '../components/Content';
import { TextInput } from '../components/TextInput';
import axios from "axios";

const useStyles = makeStyles(() => ({
  typography: {
    marginTop: 20,
  },
  item: {
    display: 'inline-flex',
    flexDirection: 'column',
  },
}));

const CreateProduct = () => {

    const [result, setResult] = useState([]);
   
    const rentsBook = () =>{
     axios.post("http://localhost:8080/v1/admin/book",{ title: title, category: category, bookExamples: bookExamples, rented: rented}).then(res =>{
          console.log(res);
          console.log(res.data);
          
          setResult(res.data.outgoing);
      }).catch((error) => { console.log(error) })     
    };



  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [bookExamples, setBookExamples] = useState('');
  const [rented, setRented] = useState('false');
  const classes = useStyles();

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    {
      title: 'Title',
      value: title,
      onChange: (event) => onChangeHandler(event, setTitle),
    },
    {
      title: 'Category',
      value: category,
      onChange: (event) => onChangeHandler(event, setCategory),
    },
    {
        title: 'Book Examples',
        value: bookExamples,
        onChange: (event) => onChangeHandler(event, setBookExamples),
      },

  ];

  return (
    <React.Fragment>
      <Content>
        <div className={classes.item}>
          <Typography variant="h5">Register new book </Typography>
          {inputFields.map((input, index) => (
            <TextInput
              key={`${index}_${input.title}`}
              title={input.title}
              value={input.value}
              onChange={input.onChange}
              id={input.value.toString()}
            />
          ))}
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: 20 }}
            size="small"
            onClick={rentsBook}
          >
            Register Book
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default CreateProduct;
