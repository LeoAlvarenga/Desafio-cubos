import styled from "styled-components";

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const MovieDetailsContainer = styled.section`
  display: flex;
  margin-top: 44px;
  width: 100%;
  height: auto;
  flex-direction: column;
  background: #f0f0f0;
`;

export const MovieDetailsHeader = styled.header`
  height: 66px;
  width: 100%;
  padding: 12px 38px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  background: #e2e2e2;

  h1 {
    color: #145685;
    white-space: nowrap;
    overflow: hidden;
  }

  p {
    font-weight: 300;
    font-size: 18px;
    color: #8b8b8b;
    margin-bottom: 8px;
  }
`;

export const MovieDetailsContent = styled.div`
  display: flex;
`;

export const MovieDetailsData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 44px 34px 30px 24px;
`;

export const MovieDetailsCover = styled.img`
  width: 340px;
  height: 510px;
`;

export const MovieDetailsOverview = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: clip;
  h2 {
    color: #145685;
    margin-bottom: 4px;
  }

  p {
    margin: 16px 0;
  }
`;

export const MovieDetailsInfo = styled.div`
  margin-bottom: 54px;
  h2 {
    color: #145685;
    margin-bottom: 4px;
  }

  h3 {
    color: #145685;
    font-size: 22px;
  }

  ul {
    margin-top: 16px;
    display: flex;
    justify-content: space-around;
    text-align: center;
    li {
      list-style: none;
    }
  }
`;

export const MovieDetailsDivider = styled.hr`
  border: solid 1px #17e4e1;
  color: #17e4e1;
`;

export const MovieDetailsFooter = styled.div`
  display: flex;
  height: auto;
`;

export const MovieDetailsCategories = styled.div`
  display: flex;
  flex: 1;

  button {
    height: min-content;
    margin-right: 8px;
  }
`;

export const MovieDetailsEmbedVideo = styled.iframe`
    margin: 44px 0;
    flex: 1;
    height: 540px;
    border: 0px;
`
