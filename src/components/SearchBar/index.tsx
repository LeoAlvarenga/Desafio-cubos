import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchBar: React.FC<InputProps> = ({ ...restProps }) => {
  return (
    <Container>
      <input type="text" placeholder="Busque um filme pelo nome..." {...restProps} />
    </Container>
  );
};

export default SearchBar;
