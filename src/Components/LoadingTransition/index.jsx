import Container from '@material-ui/core/Container';
import React from 'react'
import LoadingAnimation from '../../assets/images/image.gif'
import useStyles from './styles';


export default function LoadingTransition() {
    const styles = useStyles()   
    return (
        <Container className={styles.container}>            
                <img src={LoadingAnimation} alt=""/>
        </Container>

    )
}