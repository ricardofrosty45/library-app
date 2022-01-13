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
     axios.put("http://localhost:8080/v1/book/rent",{ title: title, username: userName, event: event}).then(res =>{
          console.log(res);
          console.log(res.data);
          
          setResult(res.data.outgoing);
      }).catch((error) => { console.log(error) })     
    };



  const [title, setTitle] = useState('');
  const [userName, setUserName] = useState('');
  const [event, setEvent] = useState('user');
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
      title: 'Username',
      value: userName,
      onChange: (event) => onChangeHandler(event, setUserName),
    },

  ];

  return (
    <React.Fragment>
      <Content>
        <div className={classes.item}>
          <Typography variant="h5">Rents a new book </Typography>
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
            Rent
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default CreateProduct;
