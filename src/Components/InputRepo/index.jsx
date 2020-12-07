import React from 'react'
import TextField  from '@material-ui/core/TextField';



export default function InputRepo( {label, value, onChange, type}) {

    return (
        <>
            <TextField
                type={type}
                label={label}
                variant="outlined"
                value={value}
                onChange={onChange}
            />
        </>
    )

}
