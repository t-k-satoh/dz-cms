import styled from 'styled-components';

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
`;

export const ContentWrap = styled.div`
    display: flex;
    height: calc(100% - 60px);
`;

export const Navigation = styled.div`
    width: 240px;
    height: 100%;
`;

export const Contents = styled.div`
    width: calc(100% - 240px);
    height: 100%;
    padding: 20px;
`;
