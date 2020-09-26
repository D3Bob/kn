import React, {useRef} from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function InputSurname(props) {

    const input = useRef(null)
    const write = () => props.setSurname(input.current.value)

    return (
        <Input
            value={props.surname}
            placeholder={'Фамилия'}
            className={props.UIstyle}
            startAdornment={<InputAdornment position="start"><AccountCircleIcon /></InputAdornment>}
            inputProps={{ 'aria-label': 'description' }}
            inputRef={input}
            onChange={write}
            fullWidth>
        </Input>
    );
}

export default InputSurname;
