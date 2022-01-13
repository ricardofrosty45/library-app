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
   
    const deativateUser = () =>{
     axios.put("http://localhost:8080/v1/admin/inactive/user/"+userId).then(res =>{
          console.log(res);
          console.log(res.data);
          setResult(res.data.outgoing);
      }).catch((error) => { console.log(error) })     
    };



  const [userId, setUserId] = useState('');
  
  const classes = useStyles();

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    {
      title: 'User Id',
      value: userId,
      onChange: (event) => onChangeHandler(event, setUserId),
    },

  ];

  return (
    <React.Fragment>
      <Content>
        <div className={classes.item}>
          <Typography variant="h5">Deactivate User </Typography>
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
            onClick={deativateUser}
          >
            Deactivate
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default CreateProduct;
