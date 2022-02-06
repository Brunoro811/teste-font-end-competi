import Routes from "./routes";
import GlobalStyle from "./utils/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <GlobalStyle />
      <Routes />
      <ToastContainer autoClose={1500} />
    </>
  );
}

export default App;
