import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #e8e8e8;
  margin: 32px 0px;
  padding: 12px 24px;
  border-radius: 30px;

  input {
      width: 100%;
      font-size: 16px;
      background: transparent;
      border: 0;

      &::placeholder {
          color: #145685;
      }
  }
`;
