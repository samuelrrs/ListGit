import React from 'react'
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import reload from '../../assets/reload.svg'
import remove from '../../assets/remove.svg'
import logo from '../../assets/logo.svg'
import { Typography } from '@material-ui/core';

/* import { Typography, TextField, Button } from '@material-ui/core'; */

export default function CardList() {
    const classes = useStyles();
    return (
        <>
            <Container className={classes.cardForm}>

                <Container className={classes.cardHeader}>
                    <img src={logo} alt="logo" className={classes.logoRepo} />
                    <Typography className={classes.textRepo}>react-native</Typography>
                    <Typography className={classes.textUser}>facebook</Typography>
                </Container>

                <Container className={classes.cardInfo1}>

                    <Container className={classes.cardLisItem1}>
                        <Typography className={classes.textStarts}>starts</Typography>
                        <Typography className={classes.textStartsN}>79580</Typography>


                    </Container>
                </Container>



                <Container className={classes.cardInfo2}>
                    <Container className={classes.cardLisItem1}>
                        <Typography className={classes.textStarts}>language</Typography>
                        <Typography className={classes.textStartsN}>JavaScript</Typography>


                    </Container>
                </Container>


                <Container className={classes.cardInfo3}>
                    <Container className={classes.cardLisItem1}>
                        <Typography className={classes.textStarts}>forks</Typography>
                        <Typography className={classes.textStartsN}>17810</Typography>


                    </Container>
                </Container>
                <Container className={classes.cardImgContainer}>

                    <img src={reload} alt="logo" className={classes.cardImg} />
                    <img src={remove} alt="logo" className={classes.cardImg} />


                </Container>
            </Container>




        </>
    )
}