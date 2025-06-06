import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledText = styled.span`
    width: 100%;
    width: auto;
    margin: 5px 0;
`;

export const StyledIcon = styled.span`
    opacity: 100%;
`;

export const StyledLink = styled(NavLink)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;
    color: black;
    margin: 15px 0;

    &::before {
        content: '';
        position: absolute;
        bottom: -6px; /* visible under the icon */
        left: 50%;
        transform: translateX(-50%) scaleX(0);
        width: 50%;
        height: 2px;
        background-color: black;
        transform-origin: center;
        transition: transform 0.3s ease-in-out;
    }

    &.active::before {
        transform: translateX(-50%) scaleX(1);
    }

    @media (max-width: 580px) {
        &::before {
            display: none;
        }
    }
`;

