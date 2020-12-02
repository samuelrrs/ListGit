import React from "react";
import { Button } from "@material-ui/core";
import useStyles from "./styles";
import "fontsource-roboto";

export default function ButtonAdd() {
    const classes = useStyles();
    return (

        <Button className={classes.btnAdd} >
            Add
        </Button>

    );
}
