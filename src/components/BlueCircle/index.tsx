import React, { HTMLAttributes } from "react";

import { Container, InnerContainer } from "./styles";

interface IBlueCircleProps extends HTMLAttributes<HTMLDivElement> {
    circleSize: number;
}

const BlueCircle: React.FC<IBlueCircleProps> = ({circleSize, children, ...resProps}) => {
  return (
    <Container circleSize={circleSize} >
      <InnerContainer>
        <h2>{children}</h2>
      </InnerContainer>
    </Container>
  );
};

export default BlueCircle;
