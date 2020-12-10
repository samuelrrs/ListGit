import React from 'react'
import useStyles from './styles';
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
export default function DetailsItemList({ name, desc, stars, language, avatar, alt }) {

    const styles = useStyles()
    return (
        <ListItem button key={name} className={styles.list}>

            <img src={avatar} alt={alt}/>
            <Typography className={styles.textList}>{name}</Typography>
            <Typography className={styles.textList}>Descrição : {desc}</Typography>
            <Typography className={styles.textList}>Stars: {stars}</Typography>
            <Typography className={styles.textList}>Linguagem: {language}</Typography>

        </ListItem>
    )


}