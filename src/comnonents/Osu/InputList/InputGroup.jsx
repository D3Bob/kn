import React, {useRef} from 'react';
import { Input, InputAdornment } from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';


function InputGroup(props) {

    const input = useRef(null)
    const write = () => props.setGroup(input.current.value)
    return (
        <Input
            value={props.group}
            placeholder={'Группа'}
            className={props.UIstyle}
            startAdornment={<InputAdornment position="start"><PeopleIcon /></InputAdornment>}
            inputProps={{ 'aria-label': 'description' }}
            inputRef={input}
            onChange={write}
            fullWidth>
        </Input>
    );
}

export default InputGroup;
