import { FormControl } from '@material-ui/core';
import React, { Children } from 'react';


export default function FormDefault({ onSubmit, error, contentForm }) {

    return (
        <>
            <FormControl
                component={'form'}
                onSubmit={onSubmit}
                error={error}
            >
                {contentForm}
            </FormControl>
        </>
    );
}
