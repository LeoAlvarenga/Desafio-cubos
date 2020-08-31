import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1024px;
  margin: 0 auto;
  padding: 16px 56px;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
    }
`;
