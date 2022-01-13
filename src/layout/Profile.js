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

const Profile = () => {

  const [result, setResult] = useState([]);
   
   const fetchClientSpendings = () =>{
    axios.post("https://virtual-store-project-back-end.herokuapp.com/v1/user",{ name: name, email: email, documentNumber: documentNumber,birthDate: birthDate}).then(res =>{
         console.log(res);
         console.log(res.data);
         console.log(res.data.outgoing);
         setResult(res.data.outgoing);
     }).catch((error) => { console.log(error) })
 
    
   };




  const [name, setName] = useState('Your Name');
  const [email, setEmail] = useState('Your Email');
  const [documentNumber, setdocumentNumber] = useState('CPF');
  const [birthDate, setBirthDate] = useState('Your Birth Date');
  const classes = useStyles();

  const onChangeHandler = (event, hook) => {
    hook(event.target.value);
  };
  const inputFields = [
    { title: 'E-mail', value: email ,
      onChange: (event) => onChangeHandler(event, setEmail),
    },
    {
      title: 'Name',
      value: name,
      onChange: (event) => onChangeHandler(event, setName),
    },
    {
      title: 'Document number',
      value: documentNumber,
      onChange: (event) => onChangeHandler(event, setdocumentNumber),
    },
    {
      title: 'Birth date',
      value: birthDate,
      onChange: (event) => onChangeHandler(event, setBirthDate),
    },
  ];

  return (
    <React.Fragment>
      <Content>
        <div className={classes.item}>
          <Typography variant="h5">Create User </Typography>
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
            onClick={fetchClientSpendings}
          >
            Save changes
          </Button>
        </div>
      </Content>
    </React.Fragment>
  );
};

export default Profile;
