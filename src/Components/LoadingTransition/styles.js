import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    backgroundColor: "white",
    height: "400px",
    padding: "20px",
    borderRadius: "5%",
  },
  img: {
    height: "70px",
  },
  text: {
    fontSize: "35px" ,
  },
}));

export default useStyles;
