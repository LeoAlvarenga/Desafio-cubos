import React from "react";

import GlobalStyle from "./styles/global";
import Main from "./pages/Main";
import Details from "./pages/Details";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
