import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { Link } from 'react-router-dom';
import useStyles from './../ItemList/styles';
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import { Container } from "@material-ui/core";

export default function ItemList({ name, handleDelete, onClickDelete, linkTo }) {

    const styles = useStyles()
    return (
        <ListItem button key={name} className={styles.list}>

            <Container className={styles.iconDelete}>
                <DeleteIcon cursor='pointer' onClick={onClickDelete} />
            </Container>

            <Container className={styles.repoName}>
                <Typography className={styles.textList}>{name}</Typography>
            </Container>

            <Link to={linkTo} className={styles.iconDetails}>
                <ViewWeekIcon size={20} className={styles.icon} />
            </Link>
        </ListItem>
    )


}