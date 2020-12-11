import React from 'react'
import { CardMedia } from '@material-ui/core';
import useStyles from './styles';


export default function CardImage({ ImageContent }) {

    const styles = useStyles()

    return (

        <>
            <CardMedia className={styles.media}>
                {ImageContent}
            </CardMedia>
        </>
    )


}