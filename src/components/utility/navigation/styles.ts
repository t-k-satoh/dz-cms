import styled from 'styled-components';

export const Main = styled.nav`
    width: 100%;
    height: 100%;
    display: flex;
`;

export const ListWrap = styled.ul`
    width: 100%;
`;

export const List = styled.li`
    width: 100%;
    height: 60px;
`;

export const LinkDetail = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
`;

export const IconWrap = styled.div`
    width: 32px;
    margin-right: 8px;
`;

export const TextWrap = styled.div<{ isSelected: boolean }>`
    ${({ isSelected }) =>
        isSelected &&
        `
      color: #FF0000;
  `}
`;
