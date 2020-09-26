import React, {useRef} from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function InputName(props) {

    const input = useRef(null)
    const write = () => props.setName(input.current.value)
    
    return (
        <Input
            value={props.name}
            inputRef={input}
            placeholder={'Имя'}
            className={props.UIstyle}
            startAdornment={<InputAdornment position="start"><AccountCircleIcon /></InputAdornment>}
            inputProps={{ 'aria-label': 'description' }}
            onChange={write}
            fullWidth
            />
        
    );
}

export default InputName;
