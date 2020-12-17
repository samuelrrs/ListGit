import React from 'react'
import Button from '@material-ui/core/Button';
import  ArrowBackIcon  from '@material-ui/icons/ArrowBack';



export default function BackButton() {


    return (
        <Button variant="contained" href="/">
            <ArrowBackIcon />
        </Button>
    )
}