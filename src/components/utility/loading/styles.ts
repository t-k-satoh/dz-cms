import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  100% { transform: rotate(360deg); }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -124;
  }
`;

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconWrap = styled.div`
    width: 50px;
    height: 50px;
`;

export const SVG = styled.svg`
    animation: ${rotate} 2s linear infinite;
    transform-origin: center center;
`;

export const Circle = styled.circle`
    animation: ${dash} 1.5s ease-in-out infinite;
    stroke-linecap: round;
`;
