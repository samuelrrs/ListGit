import React, { Children } from 'react';
import Button from '@material-ui/core/Button';


export default function ButtonDefault({ color, type, children, onClick }) {

    return (
        <>

            <Button
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
