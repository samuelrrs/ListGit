import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  cardForm: {
    color: "red",
    backgroundColor: "#FFFF",
    height: "235px",
    width: "499px",
    borderRadius: "10px",
    marginTop: "64px",
  },
  formHeader: {
    display: "flex",
    paddingTop: "70px",
  },
  formPrincipal: {
    display: "flex",
  },
  textTitle: {
    color: "#8245BF",
    fontSize: "28px",
    paddingLeft: "10px",
  },
  textNrepo: {
    color: "#8245BF",
    fontSize: "28px",
  },
  logoGit: {
    height: "52px",
    width: "53,3px",
  },
  btnAdd: {
    height: "45px",
    width: "83px",
    backgroundColor: "#8245BF",
    fontSize: "18px",
    color: "#fff",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: "20px",
  },
});

export default useStyles;
