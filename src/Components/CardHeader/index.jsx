import React from 'react'
import {CardHeader} from '@material-ui/core';

export default function CardHead({ name,date, avatar,action, }) {

    return (

        <>
          <CardHeader
                avatar={avatar}
                action={action}
                title={name}
                subheader={date}
            />             

        </>
    )


}