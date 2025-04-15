import styled from 'styled-components';
import { WrapperProps } from './socialNetworkIcons.types';

export const Wrapper = styled.div<WrapperProps>`
    position: absolute;
    top: 0;
    right: calc(100vw - (100% - 150px));
    padding: 5px 8px;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: ${({ $scrollbackground, theme }) =>
        $scrollbackground ? theme.colors.main : 'none'};
    z-index: 10;
    border-radius: 0 0 10px 10px;

    @media (max-width: 580px) {
        position: fixed;
        right: 0;
        width: 100%;
        justify-content: center;
        margin-right: 0;
    }
`;

export const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
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

