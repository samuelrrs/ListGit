import React from 'react'
import Container from '@material-ui/core/Container';
import { Typography, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import 'fontsource-roboto';
import logo from '../../assets/logo.svg'

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
                    <TextField id="filled-basic" label="Usuário/Repo" variant="outlined" className={classes.textTitle} />
                    <Button variant="contained" className={classes.btnAdd}>Add</Button>
                </Container>

            </Container>

        </>
    )
}
