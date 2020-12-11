import React from 'react'
import useStyles from './styles';
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar'
import { Avatar, CardContent, CardHeader, CardMedia } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function CardHead({ name,date, desc, stars, language, avatar, img, alt, actionIcon, action, image, repoName }) {

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