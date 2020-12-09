import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { Link } from 'react-router-dom';
import useStyles from './../ItemList/styles';
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
export default function ItemList({ name, handleDelete, onClickDelete, linkTo }) {

    const styles = useStyles()
    return (
        <ListItem button key={name} className={styles.list}>
            <DeleteIcon cursor='pointer' onClick={onClickDelete} className={styles.iconDelete} />

            <Typography className={styles.textList}>{name}</Typography>
            
            <Link to={linkTo}>
                <ViewWeekIcon size={20} />
            </Link>
        </ListItem>
    )


}