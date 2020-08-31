import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    align-self: center;
`;

export const PageNumbersList = styled.ul`
    display: flex;
    align-items: center;
`

export const PageNumber = styled.li`
    list-style: none;
    color: #145685;
    margin: 4px;
    transition: 0.4;

    &:hover {
        color: ${shade(0.2, '#145685')};
        cursor: pointer;
    }
`
