import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import LoadingTransition from './../../Components/LoadingTransition/index';
import { Container } from '@material-ui/core';
import useStyles from './styles';
import CardHead from './../../Components/CardHeader/index';
import CardPrincipal from './../../Components/CardPrincipal/index';
import CardImage from './../../Components/CardMedia/index';
import CardConteudo from './../../Components/CardContent/index';
import Typography from '@material-ui/core/Typography';
import RefreshIcon from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';
import BackButton from './../../Components/BackButton/index';

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
            <Container>
                <LoadingTransition />
            </Container>
        )
    }
    return (
        <Container>
            <BackButton />
            <Container className={styles.cardPrincipal}>
                <CardPrincipal
                    contentCard={
                        <>
                            <CardHead
                                avatar={
                                    <Container className={styles.headCard}>
                                        <Typography className={styles.tituloCard}> {repositorio.name}</Typography>
                                        <Button onClick={() => {
                                            document.location.reload();
                                        }}>
                                            <RefreshIcon />
                                        </Button>

                                    </Container>
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
                                            <span className={styles.textoFixoCard}>Descrição :</span>  {repositorio.description}
                                        </Typography>
                                        <Typography>
                                            <span className={styles.textoFixoCard}>Linguagem :</span>{repositorio.language}
                                        </Typography>
                                        <Typography>
                                            <span className={styles.textoFixoCard}>Stars :</span> {repositorio.stargazers_count}
                                        </Typography>
                                        <Typography>
                                            <span className={styles.textoFixoCard}>Forks :</span> {repositorio.forks_count}
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