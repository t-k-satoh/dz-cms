import { NextComponentType } from 'next';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const useCounter = () => {
    const count = useSelector((state: any) => state.count);
    const dispatch = useDispatch();
    const increment = () =>
        dispatch({
            type: 'INCREMENT',
        });
    const decrement = () =>
        dispatch({
            type: 'DECREMENT',
        });
    const reset = () =>
        dispatch({
            type: 'RESET',
        });
    return { count, increment, decrement, reset };
};

const Index: NextComponentType = () => {
    const { count, increment, decrement, reset } = useCounter();
    return (
        <div>
            <Title>
                Count: <span>{count}</span>
            </Title>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Index;
