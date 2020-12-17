import React from 'react'
import { Container } from '@material-ui/core';
import useStyles from './styles';
import  Typography  from '@material-ui/core/Typography';

export default function Footer() {

    const styles = useStyles()
    return (
        <Container className={styles.footer} >
            <Typography> Feito por Samuel Ribeiro </Typography>
        </Container>
    )
}