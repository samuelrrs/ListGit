import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  list: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    "&:visited": {
      color: "#9370DB",
    },
  },
  iconDelete: {
    width: "10%",
    display: "flex",
    justifyContent: 'flex-end',
    alignItems: 'center',

  },
  repoName: {
    width: "100%",
  },

  iconDetails: {
    color: "#8A2BE2",
    width: '5%',

  },
}));

export default useStyles;
