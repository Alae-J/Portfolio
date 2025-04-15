import styled from 'styled-components';
import { BurgerWrapperProps } from './burgerMenu.types';

export const BurgerWrapper = styled.div<BurgerWrapperProps>`
    display: none;
    width: 40px;
    height: 30px;
    transition:
        opacity 0.3s ease,
        transform 0.3s ease,
        visibility 0.3s ease;
    @media (max-width: 580px) {
        display: inline-flex;
        opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
        flex-direction: column;
        justify-content: space-between;
        transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg) scale(0.2)' : 'rotate(0deg) scale(1)')};
    } ;
`;

export const OuterLine = styled.span`
    width: 40px;
    height: 2px;
    border-bottom: 2px solid black;
`;

export const InnerLine = styled.span`
    width: 40px;
    height: 2px;
    border-bottom: 2px solid black;
`;
