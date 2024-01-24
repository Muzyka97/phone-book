import {useDispatch, useSelector, shallowEqual} from 'react-redux';
 
import {Link, Box, Avatar} from '@mui/material'

import defaultAvatar from './default-avatar.png';
import Button from 'shared/ButtonShared';

import { logOut } from 'redux/auth/authOperation';
import {getUserName} from '../../redux/auth/authSelectors';


const UserMenu = () =>{
    const dispatch = useDispatch();
    const avatar = defaultAvatar;
    const name = useSelector(getUserName, shallowEqual);

  return(
    <Box alignItems='center'  display='flex' >
      <Box 
        mr={5} 
        display='flex'
        >
          <Link
            href="/contacts"
            color="inherit"
            underline="none"
          >
          Contacts
          </Link >
      </Box> 

      <Box
        display='flex'
        alignItems='center'
        >
        <Avatar src={avatar} alt="user"
         />
        <Box 
          ml={1}
          >
            Привіт,{name}!
        </Box>
        <Box 
            component="span"
            mr={5}
            ml={5}
          >
          <Button type={"submit"} onPress={() => dispatch(logOut())}>Вийти</Button>
        </Box>
      </Box>
    </Box>  
  );
};
export default UserMenu;