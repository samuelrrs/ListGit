import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Container} from './styles'

import ContainerFormRepo from './../../Container/ContainerFormRepo/index';

export default function Main() {


    return (
        <Container>
            <h1>
                <FaGithub />
                Repositorios</h1>


            <ContainerFormRepo />
        </Container>
    )
}