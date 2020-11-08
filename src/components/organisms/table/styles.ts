import styled from 'styled-components';

export const Table = styled.div`
    width: 100%;
    height: 100%;
`;

export const TableRow = styled.div<{ columns: string[] }>`
    display: grid;
    ${({ columns }) => `grid-template-columns: ${columns.join(' ')};`}
`;

export const TableHeaderChild = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    padding: 0 1em;
`;

export const TableData = styled.div``;

export const TableDataChild = styled.div`
    display: flex;
    height: 40px;
    align-items: center;
    padding: 0 1em;
`;
