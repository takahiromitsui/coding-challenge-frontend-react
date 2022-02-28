import styled from 'styled-components';

export const TContainer = styled.div`
    padding: 27px 23px;
    background: #26262c;
    width: 789px;
`;

export const TFrame = styled.table`
    background: #26262c;
    font-size: 20px;
    font-style: normal;
    letter-spacing: 0em;
    text-align: left;
    color: #fafafa;
    width: 789px;
    border-collapse: collapse;
`;

export const THead = styled.thead`
    font-family: Source Serif Pro;
    font-weight: 400;
    line-height: 25px;
    position: relative;
    border-bottom: solid 2px #c4c4c4;
`;

export const TMargin = styled.div`
    height: 23px;
`;

export const TBody = styled.tbody`
    margin-top: 23px;
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
