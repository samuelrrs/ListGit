import { Container } from '@material-ui/core';
import React from 'react'
import ContainerDetailsRepo from './../../Container/ContainerDetailsRepo/index';
import useStyles from './styles';

export default function Repositorio() {
  
  const styles = useStyles()
    return (
        <Container className={styles.container}>
          <ContainerDetailsRepo/>
        </Container>
    )
}