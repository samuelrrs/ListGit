import React from 'react'

import ContainerFormRepo from './../../Container/ContainerFormRepo/index';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import useStyles from './styles';
export default function Main() {

    const styles = useStyles()

    return (
        <Container className={styles.container}>
            <Typography className={styles.title}>
                <GitHubIcon className={styles.icon} />
                   Repositorios
            </Typography>
            <ContainerFormRepo />
            
        </Container>
    )
}