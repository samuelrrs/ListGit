import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '700px',
    background:' #fff',
    borderRadius: '4px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 1)',
    padding: '30px',
    margin: '80px auto',
  
  },
  title: {
    fontSize: '40px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: '10px',
    fontSize: '65px'

  }
}));



export default useStyles;
