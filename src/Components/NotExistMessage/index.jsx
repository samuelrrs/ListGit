import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NotExistMessage() {
    const [open, setOpen] = useState(true);
    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            open={open}
            autoHideDuration={26000}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center'
            }}>
            <Alert onClose={handleClose} severity="error">
                Esse n existe n
        </Alert>
        </Snackbar>
    );
}
