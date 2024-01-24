import { Typography,Box, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation'; 

import Button from 'shared/ButtonShared';


const Login = () => {
const dispach = useDispatch();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleChange = ({target: {name, value}})=>{
  switch(name){
    case 'email' :
      return setEmail(value)
    case 'password' :
      return setPassword(value)
    default :
      return
  };
};

const handleSubmit = e => {
  e.preventDefault();
  dispach(logIn({email, password}));
  setEmail('');
  setPassword('');
};

  return (
        <Box component='div'
             pt={15}>
          <Typography textAlign='center' variant="h2" gutterBottom>
            Сторінка логіна
          </Typography>

          <Box 
            m="auto"
            component='form' 
            onSubmit={handleSubmit}  
            autoComplete="on"
            width="700px"
            height='500px'
            p={1}
          >
          <TextField 
            id="standard-basic" 
            label="Email" 
            variant="standard"
            size='small'
            fullWidth 
            value={email}
            type="email"
            name="email"
            onChange={handleChange}
            margin='normal'
          />
          <TextField 
              id="standard-basics" 
              label="Password" 
              variant="standard"
              size='small'
              fullWidth 
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              margin='normal'
            />
            <Box 
                component='span'
                display='flex' 
                justifyContent="center"
                mt={5}>
              <Button  type={"submit"}>Вхід</Button>
            </Box>
          </Box>
        </Box>
  )
};
export default Login;