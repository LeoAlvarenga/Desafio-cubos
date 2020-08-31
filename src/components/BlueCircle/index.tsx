import React, { HTMLAttributes } from "react";

import { Container, InnerContainer } from "./styles";

interface IBlueCircleProps extends HTMLAttributes<HTMLDivElement> {
    circleSize?: number;
    fontSize?: number;
}

const BlueCircle: React.FC<IBlueCircleProps> = ({circleSize, fontSize, children, ...resProps}) => {
  return (
    <Container circleSize={circleSize}>
      <InnerContainer circleSize={circleSize} fontSize={fontSize}>
        <h2>{children}</h2>
      </InnerContainer>
    </Container>
  );
};

export default BlueCircle;
