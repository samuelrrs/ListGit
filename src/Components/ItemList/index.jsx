import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import ViewWeekIcon from '@material-ui/icons/ViewWeek';
import { Link } from 'react-router-dom';
import ButtonDefault from './../ButtonDefault/index';

export default function ItemList({ name, handleDelete, onClickDelete, linkTo }) {

    return (
        <>
            <li key={name}>
                <span>
                    <ButtonDefault onClick={onClickDelete}>
                        <DeleteIcon size={14} />
                    </ButtonDefault>
                    {name}

                </span>
                <Link to={linkTo}>
                    <ViewWeekIcon size={20} />
                </Link>
            </li>

        </>
    )


}