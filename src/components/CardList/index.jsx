import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import useStyles from './styles';
import reload from '../../assets/reload.svg'
import remove from '../../assets/remove.svg'
import logo from '../../assets/logo.svg'
import { Typography } from '@material-ui/core';
import axios from 'axios'

export default function CardList() {


    const [repo, setRepo] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    useEffect(() => {
        axios
            .get('https://api.github.com/repos/facebook/react-native')
            .then(resp => {
                setRepo(resp.data)
            })
            .catch(error => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    const classes = useStyles();
    return (
        <>
            <Container className={classes.formPrincipal}>
                <Container className={classes.cardForm}>

                    <Container className={classes.cardHeader}>
                        <img src={logo} alt="logo" className={classes.logoRepo} />
                        <Typography className={classes.textRepo}>{repo.name}</Typography>
                        <Typography className={classes.textUser}>facebook</Typography>
                    </Container>

                    <Container className={classes.cardInfo1}>

                        <Container className={classes.cardLisItem1}>
                            <Typography className={classes.textStarts}>stars</Typography>
                            <Typography className={classes.textStartsN}>{repo.stargazers_count}</Typography>


                        </Container>
                    </Container>



                    <Container className={classes.cardInfo2}>
                        <Container className={classes.cardLisItem1}>
                            <Typography className={classes.textStarts}>language</Typography>
                            <Typography className={classes.textStartsN}>{repo.language}</Typography>


                        </Container>
                    </Container>


                    <Container className={classes.cardInfo3}>
                        <Container className={classes.cardLisItem1}>
                            <Typography className={classes.textStarts}>forks</Typography>
                            <Typography className={classes.textStartsN}>{repo.forks}</Typography>


                        </Container>
                    </Container>
                    <Container className={classes.cardImgContainer}>

                        <img src={reload} alt="logo" className={classes.cardImg} />
                        <img src={remove} alt="logo" className={classes.cardImg} />


                    </Container>
                </Container>



            </Container>



        </>
    )
}