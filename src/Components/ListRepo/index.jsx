import React from 'react'
import List from '@material-ui/core/List';


export default function ListRepo({itemList}) {


    return (
        <>
            <List dense={true}>
                {itemList}
            </List>
        </>
    )
}