import React, {useState, useEffect} from 'react';
import styles from './OsuStyles.module.css'
import { makeStyles } from '@material-ui/core/styles'
import { Alert } from '@material-ui/lab';
import Button from '@material-ui/core/Button';


import InputName from './InputList/InputName';
import InputSurname from './InputList/InputSurname';
import InputSend from './InputList/InputSend';
import InputMotive from './InputList/InputMotive';
import InputGroup from './InputList/InputGroup';


const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(2),
    },
    textarea: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        margin: theme.spacing(2),
    }
}));


  

function Osu() {

    const UIstyles = useStyles()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [group, setGroup] = useState('')
    const [motive, setMotive] = useState('')
    const [openSubmit,setOpenSubmit] = useState('none')
    const [openError,setOpenError] = useState('none')

    

    useEffect(() => console.log('setName'), [name])
    useEffect(() => console.log('setSurname'), [surname])
    useEffect(() => console.log('SetGroup'), [group])
    useEffect(() => console.log('setMotive'), [motive])
    

    const onFinish = (e) => {
        console.log([name, surname, group, motive])
        if(name === '' || surname === '' || group === '' || motive === '')
            setOpenError('')
        else {
            setName('') 
            setSurname('')
            setGroup('')
            setMotive('')
            setOpenError('none')
            setOpenSubmit('')
        }    
        e.preventDefault()
    }

    const closeError = () => {
        if(openError === '') setOpenError('none')
        else setOpenError('')
    }
    const closeSubmit = () => {
        if(openSubmit === '') setOpenSubmit('none')
        else setOpenSubmit('')
    }

    
    

    return (
        <div>
            <Alert
                severity="error"
                style={{ display: openError}}
                action={<Button color="inherit" size="small" onClick={closeError}>x</Button>}>
                Заполните все поля
            </Alert>
            <Alert
                severity="success"
                style={{ display: openSubmit}}
                action={<Button color="inherit" size="small" onClick={closeSubmit}>x</Button>}>
                Ваша заявка отправлена
            </Alert>

            <form className={styles.form} onSubmit={onFinish}>
                <InputName    UIstyle={UIstyles.margin}   setName={setName}       name={name}/>
                <InputSurname UIstyle={UIstyles.margin}   setSurname={setSurname} surname={surname} />
                <InputGroup   UIstyle={UIstyles.margin}   setGroup={setGroup}     group={group}/>
                <InputMotive  UIstyle={UIstyles.textarea} setMotive={setMotive}   motive={motive}/>
                <InputSend/>
            </form>
        </div>
    );
}

export default Osu;
