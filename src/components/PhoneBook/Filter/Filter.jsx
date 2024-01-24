import PropTypes from 'prop-types'; 
import {Box, TextField} from '@mui/material';

const Filter = ({filter, changeFilter}) =>{
    return(
        <Box>
            <TextField
                id="standard-number" 
                label=" Find contact by name" 
                variant="standard"
                size='small'
                fullWidth 
                onChange={changeFilter}
                value={filter}
                type="text"
                name="filter" 
            />
        </Box>
    )
};
Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};
export default Filter;