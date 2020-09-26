import React from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


function InputSend(props) {
    return (
        <Button variant="contained" color="primary" type="submit"  endIcon={<SendIcon></SendIcon>}>Отправить</Button>
    );
}

export default InputSend;
