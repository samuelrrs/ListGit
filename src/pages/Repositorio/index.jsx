import React, { useState, useEffect } from 'react'
import api from '../../services/api'
import { Container, Owner, Loading, BackButton, /* IssuesList */ } from './styles';
import { FaArrowLeft } from 'react-icons/fa'
import LoadingTransition from './../../Components/LoadingTransition/index';
import ItemList from '../../Components/DetailsItemList';


export default function Repositorio({ match }) {
    const [repositorio, setRepositorio] = useState({});
    /*   const [issues, setIssues] = useState([]) */
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(match.params.repositorio)


            const [repositorioData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                /*  api.get(`/repos/${nomeRepo}/issues`, {
                     params: {
                         state: 'open',
                         per_page: 5
                     }
                 }) */
            ])
            setRepositorio(repositorioData.data)
            setLoading(false)

        }
        load()
    }, [match.params.repositorio])

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
                <FaArrowLeft color="#b41313" size={30} />
            </BackButton>
            <Owner>

                <ItemList
                    key={repositorio.name}
                    avatar={repositorio.owner.avatar_url}
                    alt={repositorio.owner.login}
                    name={repositorio.name}
                    desc={repositorio.description}
                    stars={repositorio.stargazers_count}
                    language={repositorio.language}
                />

                {/*   
                <img
                    src={repositorio.owner.avatar_url}
                    alt={repositorio.owner.login} />
                <Typography>{repositorio.name}</Typography>
                <Typography>{repositorio.description}</Typography>
                <Typography>Stars : {repositorio.stargazers_count}</Typography>
                <Typography>Language : {repositorio.language}</Typography> */}
            </Owner>

            {/*         <IssuesList>
                {issues.map(issue => (
                    <li key={String(issue.id)}>
                        <img src={issue.user.avatar_url} alt={issue.user.login} />

                        <div>
                            <strong>
                                <a href={issue.html_url}> {issue.title} </a>

                                {issue.labels.map(label => (
                                    <span key={String(label.id)}>{label.name}</span>
                                ))}
                            </strong>
                                <p>{issue.user.login}</p>
                        </div>

                    </li>
                ))}
            </IssuesList> */}
        </Container>
    )
}