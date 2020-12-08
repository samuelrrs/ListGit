import { FormControl } from '@material-ui/core';
import React, { Children } from 'react';
import useStyles from './styles';

export default function FormDefault({ onSubmit, error, contentForm }) {

    const styles = useStyles()

    return (
        <>
            <FormControl
                className={styles.container}
                component={'form'}
                onSubmit={onSubmit}
                error={error}
            >
                {contentForm}
            </FormControl>
        </>
    );
}
