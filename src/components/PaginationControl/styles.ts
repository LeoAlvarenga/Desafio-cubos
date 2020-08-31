import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    align-self: center;
`;

export const PageNumbersList = styled.ul`
    display: flex;
    align-items: center;

    @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    padding: 0 16px;
    }
`

export const PageNumber = styled.li`
    list-style: none;
    color: #145685;
    margin: 4px;
    transition: 0.4;

    @media screen and (max-width: 480px) {
    margin: 8px;
    }

    &:hover {
        color: ${shade(0.2, '#145685')};
        cursor: pointer;
    }
`
