import styled from 'styled-components';
import { DescriptionProps } from './project.types';

export const ProjectWrapper = styled.div`
    position: relative;
    text-decoration: none;
    height: 400px;
    width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    align-self: center;
    justify-self: center;
    @media (max-width: 580px) {
        height: 300px;
        width: 300px;
        margin: 10px 0;
    }
`;
export const StyledProject = styled.img`
    height: auto;
    width: 400px;
    @media (max-width: 580px) {
        width: 300px;
    }
`;
export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-height: 450px;
    width: auto;
`;

export const CoverWrapper = styled.div`
    background: black;
    z-index: 2;
    position: absolute;
    top: 0;
    height: 400px;
    width: 400px;
    opacity: 20%;
    &:hover {
        opacity: 0;
        transition: opacity 0.5s ease-out;
    }
    @media (max-width: 580px) {
        height: 300px;
        width: 300px;
        display: none;
    }
`;

export const StyledLink = styled.a`
    text-decoration: none;
`;
export const ContentWrapper = styled.div<DescriptionProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    text-decoration: none;
    padding: 10px;
    font-size: ${({ theme }) => theme.fontSize.XS};
    opacity: ${({ $show }) => ($show ? '100%' : 0)};
    font-family: ${({ theme }) => theme.fontFamily.mainFont};
    color: black;
    background: ${({ theme }) => theme.colors.content};
    z-index: 2;
    position: absolute;
    top: 150px;
    left: 0;
    height: ${({ $show }) => ($show ? '250px' : 0)};
    width: 400px;
    transition: all 1s ease;

    @media (max-width: 580px) {
        top: 0;
        width: 300px;
        font-size: ${({ theme }) => theme.fontSize.XS};
        height: ${({ $show }) => ($show ? '300px' : 0)};
    }
`;
