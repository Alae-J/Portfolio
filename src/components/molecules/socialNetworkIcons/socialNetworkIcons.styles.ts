import styled from 'styled-components';
import { WrapperProps } from './socialNetworkIcons.types';

export const Wrapper = styled.div<WrapperProps>`
    top: 0;
    position: sticky;
    padding: 20px 0;
    grid-column: 9 / 11;
    grid-row: 1 / 2;
    align-self: start;
    height: 80px;
    background: ${({ scrollbackground, theme }) =>
        scrollbackground === true ? theme.colors.main : 'none'};
    z-index: 1;
    width: 100%;
    border-radius: 5px;
    @media (max-width: 1800px) {
        grid-column: 8 / 11;
    }
    @media (max-width: 1150px) {
        grid-column: 6 / 11;
    }
    @media (max-width: 780px) {
        grid-column: 4 / 11;
    }
    @media (max-width: 580px) {
        position: fixed;
        justify-content: center;
        align-items: center;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-width: 250px;
    height: 100%;
    padding: 0 16px;
`;

export const SocialIcons = styled.div`
    display: flex;
    gap: 25px;

    @media (max-width: 580px) {
        gap: 10px;
    }
`;

export const StyledIcon = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 30px;
`;

