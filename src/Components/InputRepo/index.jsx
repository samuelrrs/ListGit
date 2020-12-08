import React from 'react'
import TextField  from '@material-ui/core/TextField';
import useStyles from './styles';


export default function InputRepo( {label, value, onChange, type}) {

    const styles = useStyles()
    return (
        <>
            <TextField
                className={styles.input}
                type={type}
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
            />
        </>
    )

}
