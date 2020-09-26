import React, {useRef} from 'react';
import { TextField, InputAdornment  } from '@material-ui/core';
import ColorLensIcon from '@material-ui/icons/ColorLens';



function InputMotive(props) {

    const input = useRef(null)
    const write = () => props.setMotive(input.current.value)

    return (
        <TextField
            value={props.motive}
            placeholder="Цель участия"
            className={props.UIstyle}
            fullWidth
            inputRef={input}
            onChange={write}
        />
    );
}

export default InputMotive;
