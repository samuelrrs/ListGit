import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Footer from "./Components/Footer/index";
import { Container } from "@material-ui/core";
import useStyles from "./styles";

function App() {
  const styles = useStyles();
  return (
    <Container className={styles.mainContainer}>
      <GlobalStyle />
      <Footer />
      <Routes />
    </Container>
  );
}

export default App;
