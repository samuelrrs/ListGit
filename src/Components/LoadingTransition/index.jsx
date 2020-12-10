import Container from '@material-ui/core/Container';
import React from 'react'
import LoadingAnimation from '../../assets/images/image.gif'
import useStyles from './styles';
import  Typography  from '@material-ui/core/Typography';


export default function LoadingTransition() {
    const styles = useStyles()
    return (
        <Container className={styles.container}>
            <Typography className={styles.text}>Carregando...</Typography>
            <img src={LoadingAnimation} alt="loadingCircle" className={styles.img} />
        </Container>

    )
}