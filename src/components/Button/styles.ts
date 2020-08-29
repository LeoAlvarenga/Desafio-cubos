import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  padding: 2px 10px;
  font-size: 16px;
  border-radius: 30px;
  border: solid 1px #145685;
  background: #fff;
  color: #145685;
  transition: 0.4s;

  &:hover {
      background: ${shade(0.2, '#fff')}
  }
`;
