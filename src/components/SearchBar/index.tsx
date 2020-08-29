import React from "react";

import { Container } from "./styles";

const SearchBar: React.FC = () => {
  return (
    <Container>
      <input type="text" placeholder="Busque um filme por nome ano ou gênero..." />
    </Container>
  );
};

export default SearchBar;
