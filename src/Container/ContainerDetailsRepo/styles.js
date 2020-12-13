import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardPrincipal: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  tituloCard: {
    fontWeight: "bold",
    fontSize: "15px",
  },
}));

export default useStyles;
