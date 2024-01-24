import PropTypes from 'prop-types'; 
import {Button} from '@mui/material';


const ButtonShared = ({children, type, onPress}) => {
    return (
        <Button size="small" variant="contained" disableElevation type={type} onClick={onPress}>{children}</Button>
    );
};

ButtonShared.propTypes = {
    onPress: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired,
};

export default ButtonShared;