import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  list: {
    display: 'flex',
    flexDirection: "row",
    justifyContent: 'space-between',
  }, 
  textList: {
   marginRight: '400px'
  }
}));

export default useStyles;
