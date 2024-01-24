import PropTypes from 'prop-types'; 
import {Box, List, ListItem} from '@mui/material';

import Button from 'shared/ButtonShared';

const ContactsList = ({contacts, deleteContacts}) =>{

    const contact = contacts.map(({id, name, number})=>(
        <Box 
            mb={1}
            key={id}
            >
            <ListItem 
                disablePadding 
                > {name}: 
                <Box 
                    element="span" 
                    mr={15} 
                    ml={1}>{number} 
                </Box> 
                <Box
                    ml='auto'  
                    element="span" 
                    >
                    <Button type={"submit"} onPress={()=>deleteContacts(id)}>Видалити</Button>
                </Box>
            </ListItem>
        </Box>
    ));
    return (
        <Box                
            display='flex' 
            justifyContent="center" 
            mt={3}
            mb={1}
            >
            <List
                disablePadding
            >{contact}</List>
        </Box>
    );
};
ContactsList.propTypes = {
    deleteContacts: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
};
export default ContactsList;