import React from "react";

import Header from "../../components/Header";

import { Container } from "./styles";
import SearchBar from "../../components/SearchBar";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <SearchBar />
      </Container>
    </>
  );
};

export default Main;
