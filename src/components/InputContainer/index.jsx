import React from 'react'
import { TextField } from '@material-ui/core';
import useStyles from './styles';

export default function InputContainer() {
    const classes = useStyles();
    return (
        <>

            <TextField id="filled-basic" label="Usuário/Repo" variant="outlined" className={classes.inputText} />

        </>
    )
}
