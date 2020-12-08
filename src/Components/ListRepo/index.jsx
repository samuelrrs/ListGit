import React from 'react'
import List from '@material-ui/core/List';
import useStyles from './../ListRepo/styles';

export default function ListRepo({itemList}) {

    const styles = useStyles()

    return (
        <>
            <List dense={true} className={styles.list}>
                {itemList}
            </List>
        </>
    )
}