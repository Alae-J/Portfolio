import styled from 'styled-components';
import { IconProps } from './svgIcon.types';

export const SvgContainer = styled.div<IconProps>`
    height: ${({ $height }) => $height + 'px'};
    width: ${({ $width }) => $width + 'px'};
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 100%;
    object-fit: contain;
    svg {
        width: 100%;
        height: 100%;
    }
`;
