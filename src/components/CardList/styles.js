import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
 
  cardForm: {
    color: "red",
    backgroundColor: "#FFFF",
    height: "542px",
    width: "398px",
    borderRadius: "10px",
    marginTop: "64px",
  },
  cardHeader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "25px",
  },
  logoRepo: {
    height: "105px",
    width: "105px",
  },
  textRepo: {
    color: "#707070",
    fontSize: "32px",
  },
  textUser: {
    color: "#A0A0A0",
    fontSize: "18px",
    opacity: "100%",
  },
  cardLisItem1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: "10px",
  },
  cardInfo1: {
    height: "55px",
    width: "316px",
    backgroundColor: "#F0F0F0",
    display: "flex",
  },
  cardInfo2: {
    height: "55px",
    width: "316px",
    backgroundColor: "#FFF",
    display: "flex",
  },
  cardInfo3: {
    height: "55px",
    width: "316px",
    backgroundColor: "#F0F0F0",
    display: "flex",
  },
  textStarts: {
    color: "#707070",
    fontSize: "18px",
    opacity: "100%",
  },
  textStartsN: {
    color: "#707070",
    fontSize: "18px",
    opacity: "100%",
  },
  cardImgContainer: {
    display: "flex",
    justifyContent: "flex-end",
    paddingTop: "25px"
  },
  cardImg: {
    height: "32px",
    width: "32px",
  },
});

export default useStyles;
