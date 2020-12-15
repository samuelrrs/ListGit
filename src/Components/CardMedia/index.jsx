import React from 'react'
import { CardMedia } from '@material-ui/core';

export default function CardImage({ ImageContent }) {


    return (

        <>
            <CardMedia >
                {ImageContent}
            </CardMedia>
        </>
    )


}