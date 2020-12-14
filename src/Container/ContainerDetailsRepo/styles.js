import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardPrincipal: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  headCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  tituloCard: {
    fontWeight: "bold",
    fontSize: "30px",
  },
  textoFixoCard: {
    fontWeight: "bold",
    fontSize: "15px",
  },
}));

export default useStyles;
