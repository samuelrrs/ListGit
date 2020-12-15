import React, { useState, useCallback, useEffect } from 'react'
import FormDefault from './../../Components/FormDefault/index';
import api from '../../services/api'
import InputRepo from './../../Components/InputRepo/index';
import ButtonDefault from '../../Components/ButtonDefault';
import ListRepo from './../../Components/ListRepo/index';
import ItemList from '../../Components/ItemList';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import useStyles from './styles';
import LoopOutlinedIcon from '@material-ui/icons/LoopOutlined';
import TipMessage from './../../Components/TipMessage/index';
import DuplicatedMessage from './../../Components/DuplicatedMessage/index';
import NotExistMessage from './../../Components/NotExistMessage/index';

export default function ContainerFormRepo() {

    const [newRepo, setNewRepo] = useState('');
    const [repositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const [existe, setExiste] = useState(false)
    useEffect(() => {
        const repoStorage = localStorage.getItem('repos')
        if (repoStorage) {
            setRepositorios(JSON.parse(repoStorage))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('repos', JSON.stringify(repositorios))
    }, [repositorios])


    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        async function submit() {
            setLoading(true)
            setAlert(null)
            try {
                if (newRepo === '') {
                    throw new Error('O campo não pode ser em branco')
                }
                const response = await api.get(`repos/${newRepo}`)
                const hasRepo = repositorios.find(repo => repo.name === newRepo)
                if (hasRepo) {
                    setShowAlert(true)
                    throw new Error('Já existe')
                }
                const data = {
                    name: response.data.full_name,
                }
                setRepositorios([...repositorios, data])
                setNewRepo('')
            }
            catch (error) {
                setAlert(true)
                setExiste(true)
                console.log(setExiste)

            } finally {
                setLoading(false);
            }
        }

        submit();
    },
        [newRepo, repositorios]);

    function handleinputChange(e) {
        setNewRepo(e.target.value)
        setAlert(null)
    }
    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo)
        setRepositorios(find)
    }, [repositorios])
    const styles = useStyles()
    return (
        <>
            <FormDefault className={styles.container}
                onSubmit={handleSubmit}
                error={alert}
                contentForm={
                    <>
                        <InputRepo
                            type={'text'}
                            label={'Digite usuário/repositório'}
                            value={newRepo}
                            onChange={handleinputChange}
                        />
                        <ButtonDefault
                            color={'primary'}
                            type={'submit'}>

                            {loading ? (
                                <LoopOutlinedIcon />
                            ) : (<AddCircleOutlineIcon />)
                            }
                        </ButtonDefault>
                    </>
                }
            />
            {showAlert ?
                <DuplicatedMessage />
                :
                <TipMessage />
            }

            {existe ?
                <NotExistMessage />
                :
                ''
            }
            <ListRepo className={styles.list}
                itemList={
                    <>
                        {
                            repositorios.map(repo => (
                                <ItemList
                                    key={repo.name}
                                    name={repo.name}
                                    onClickDelete={() => { handleDelete(repo.name) }}
                                    linkTo={`/repositorio/${encodeURIComponent(repo.name)}`}
                                />
                            ))
                        }
                    </>
                }
            />
        </>
    )
}