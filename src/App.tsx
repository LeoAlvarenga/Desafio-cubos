import React from "react";

import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { TmdbProvider } from "./hooks/tmdb";

const App: React.FC = () => (
  <BrowserRouter>
    <TmdbProvider>
      <Routes />
    </TmdbProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;
