import React, { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<IButtonProps> = ({ children, ...restProps }) => {
  return (
    <Container type="button" {...restProps}>
      {children}
    </Container>
  );
};

export default Button;
