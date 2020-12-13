import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Owner, Loading, BackButton, /* IssuesList */ } from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadingTransition from './../../Components/LoadingTransition/index';
import DetailsItemList from '../../Components/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import CardHead from './../../Components/CardHeader/index';
import CardPrincipal from './../../Components/CardPrincipal/index';
import CardImage from './../../Components/CardMedia/index';
import CardConteudo from './../../Components/CardContent/index';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';

export default function ContainerDetailsRepo() {
    const pathname = window.location.pathname.replace('/repositorio', '')
    const [repositorio, setRepositorio] = useState({});
    const [loading, setLoading] = useState(true)
    const styles = useStyles()

    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(pathname)
            const [repositorioData] = await Promise.all([
                api.get(`/repos${nomeRepo}`),
            ])
            setRepositorio(repositorioData.data)
            setLoading(false)
        }
        load()
    }, [pathname])

    if (loading) {
        return (
            <Loading>
                <LoadingTransition />
            </Loading>
        )
    }


    return (
        <Container>
            <BackButton to="/">
                <ArrowBackIcon />
            </BackButton>
            <Container className={styles.cardPrincipal}>
                <CardPrincipal
                    contentCard={
                        <>
                            <CardHead
                                avatar={
                                    <>
                                        <Button >
                                            <RefreshIcon />
                                        </Button>

                                    </>
                                }
                                title={repositorio.name}
                                subheader={repositorio.language}
                            />
                            <CardImage
                                ImageContent={
                                    <>
                                        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
                                    </>
                                }
                            />
                            <CardConteudo
                                cardDesc={
                                    <>
                                        <Typography>
                                            {repositorio.description}
                                        </Typography>
                                        <Typography>
                                            {repositorio.language}
                                        </Typography>
                                        <Typography>
                                            {repositorio.stargazers_count}
                                        </Typography>
                                    </>
                                }

                            />
                        </>
                    }

                />

            </Container>
        </Container>
    )
}