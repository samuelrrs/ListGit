import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Footer from "./Components/Footer/index";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Footer /> 
      <Routes />
    </Container>
  );
}

export default App;
