import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation'; 

import { Typography,Box,TextField } from '@mui/material';

import Button from 'shared/ButtonShared';

const Register = () => {
    const dispach = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const handleChange = ({target: {name, value}}) => {
    switch(name){
        case 'name' :
            return setName(value)
        case 'email' :
            return  setEmail(value)
        case 'password' :
            return setPassword(value)  
        default :
             return
    };
};

const handleSubmit = e => {
    e.preventDefault();
    dispach(register({name, email, password}));
    setName('');
    setEmail('');
    setPassword('');
};

    return(
        <Box pt={15}>
          <Typography textAlign='center' variant="h2" gutterBottom>
             Сторінка для реєстрації
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
            id="name" 
            label="Імя" 
            variant="standard"
            size='small'
            fullWidth 
            type="text" 
            name="name" 
            value={name} 
            onChange={handleChange} 
            margin='normal'
          />
          <TextField 
            id="email" 
            label="Пошта" 
            variant="standard"
            size='small'
            fullWidth 
            type="email"
            name="email"
            value={email}
            onChange={handleChange} 
            margin='normal'
          />
          <TextField 
            id="password" 
            label="Пароль (повинен містити більше 7-ми симфолів)" 
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
            <Button type={"submit"}>Зареєструватися</Button>
          </Box>
        </Box>
      </Box>
    )
};

export default Register;