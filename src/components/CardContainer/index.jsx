import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography, Button } from '@material-ui/core';
import useStyles from './styles';
import 'fontsource-roboto';
import logo from '../../assets/logo.svg'
import InputContainer from './../InputContainer/index';
import ButtonAdd from './../ButtonAdd/index';

export default function CardComponent() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.cardForm}>
                <Container className={classes.formHeader}>
                    <Container className={classes.formPrincipal}>
                        <img src={logo} alt="logo" className={classes.logoGit} />
                        <Typography className={classes.textTitle}>Repositórios</Typography>
                    </Container>
                    <Typography className={classes.textNrepo}>4</Typography>
                </Container>

                <Container className={classes.footerContainer} >
                    <InputContainer />
                    <ButtonAdd />
                </Container>

            </Container>

        </>
    )
}
