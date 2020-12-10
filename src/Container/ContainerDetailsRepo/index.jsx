import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Container, Owner, Loading, BackButton, /* IssuesList */ } from './styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LoadingTransition from './../../Components/LoadingTransition/index';
import DetailsItemList from '../../Components/DetailsItemList';

export default function ContainerDetailsRepo() {
    const pathname = window.location.pathname.replace('/repositorio', '')
    const [repositorio, setRepositorio] = useState({});
    const [loading, setLoading] = useState(true)

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
                <ArrowBackIcon/>
            </BackButton>
            <Owner>
                <DetailsItemList
                    key={repositorio.name}
                    avatar={repositorio.owner.avatar_url}
                    alt={repositorio.owner.login}
                    name={repositorio.name}
                    desc={repositorio.description}
                    stars={repositorio.stargazers_count}
                    language={repositorio.language}
                />
            </Owner>
        </Container>
    )
}