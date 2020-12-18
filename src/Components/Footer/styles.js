import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    padding: "1rem",
    color: "white",
    position: "fixed",
    bottom: "0",
  },
  link: {
     textDecoration: "none",
     color: "#FFF",
     "&:visited": {
      color: "#FFFF",
    },
    },
}));

export default useStyles;
