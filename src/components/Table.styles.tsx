import styled from 'styled-components';

export const TFrame = styled.table`
    padding: 27px 23px;
    background: #26262c;
    font-size: 20px;
    font-style: normal;
    letter-spacing: 0em;
    text-align: left;
    color: #fafafa;
    width: 789px;
`;

export const THead = styled.thead`
    font-family: Source Serif Pro;
    font-weight: 400;
    line-height: 25px;
    position: relative;
`;

export const TBody = styled.tbody`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    &:before {
        display: block;
    }
`;

export const TR = styled.tr`
    position: relative;
`;

export const TH = styled.th`
    &:last-child {
        right: 0;
        position: absolute;
    }
`;
