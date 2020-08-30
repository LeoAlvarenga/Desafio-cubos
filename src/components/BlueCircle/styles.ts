import styled from "styled-components";

interface ICircleProps {
    circleSize: number;
  }

export const Container = styled.div<ICircleProps>`
  background: #145685;
  height: ${(props) => props.circleSize}px;
  width: ${(props) => props.circleSize}px;
  padding: 4px;
  border-radius: 50%;
  color: #17e4e1;
  position: relative;
`;

export const InnerContainer = styled.div`
  background: transparent;
  border: 4px solid #17e4e1;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
