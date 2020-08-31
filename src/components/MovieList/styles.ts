import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MovieContainer = styled.div`
  width: 100%;
  height: 312px;
  margin: 22px 0;

  background: #e8e8e8;

  display: flex;

  transition: 0.4s;
  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const MovieCover = styled.img`
  width: 206px;
  height: 100%;
  background: #145685;
`;

export const MovieContent = styled.div`
  flex: 1;
  flex-direction: column;
  display: block;
`;

export const MovieInfo = styled.div`
  flex: 1;
  flex-direction: column;
  padding: 4px 28px;
  overflow: hidden;
`;

export const MovieHeader = styled.div`
  display: flex;
  height: 64px;
  flex: 1;
  padding-left: 96px;
  padding-right: 8px;
  align-items: flex-end;
  justify-items: flex-start;
  background: #145685;
  color: #17e4e1;
  overflow: auto;

  h1 {
    white-space: nowrap;
  }
`;

export const Date = styled.p`
  font-weight: 300;
  font-size: 18px;
  align-self: flex-start;
  margin-left: 68px;
  color: #8b8b8b;
`;

export const MovieOverviewWrap = styled.div`
  margin-top: 36px;
  flex: 1;
  max-height: 136px;
  overflow: hidden;
  text-overflow: clip;
`;

export const MovieCategoriesList = styled.nav`
  display: flex;
  margin-top: 24px;
  margin-bottom: 4px;

  button {
    margin-right: 8px;
  }
`;

export const BlueCircleContainer = styled.div`
  width: 72px;
  height: 72px;
  position: absolute;
  margin-top: 28px;
  margin-left: 16px;
`;
