import React, { useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomizedSnackbars() {
  const [open, setOpen] = useState(true);


  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const styles = useStyles()

  return (
    <Snackbar
      open={open}
      autoHideDuration={26000}
      onClose={handleClose}
      className={styles.tip}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}>
      <Alert onClose={handleClose} severity="info">
        Dica : facebook/react-native
        </Alert>
    </Snackbar>
  );
}
