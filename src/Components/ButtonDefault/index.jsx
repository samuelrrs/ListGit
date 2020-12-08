import React, { Children } from 'react';
import Button from '@material-ui/core/Button';
import useStyles from './../ButtonDefault/styles';

export default function ButtonDefault({ color, type, children, onClick }) {

    const styles = useStyles()

    return (
        <>

            <Button className={styles.button}
                variant="contained"
                color={color}
                type={type}
                onClick={onClick}
            >
                {children}
            </Button>

        </>
    );
}
