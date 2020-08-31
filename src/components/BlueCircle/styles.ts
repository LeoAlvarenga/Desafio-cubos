import styled, { css } from "styled-components";

interface ICircleProps {
  circleSize?: number;
  fontSize?: number;
}

export const Container = styled.div<ICircleProps>`
  background: #145685;
  height: 72px;
  width: 72px;
  padding: 4px;
  border-radius: 50%;
  color: #17e4e1;
  position: relative;

  ${(props) =>
    props.circleSize &&
    css`
      height: ${props.circleSize}px;
      width: ${props.circleSize}px;
    `}
`;

export const InnerContainer = styled.div<ICircleProps>`
  background: transparent;
  border: 4px solid #17e4e1;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.circleSize &&
    css`
      border-width: ${props.circleSize / 18}px;
    `}

  h2 {
    ${(props) =>
      props.fontSize &&
      css`
      font-size: ${props.fontSize}px;
    `}
  }
`;
