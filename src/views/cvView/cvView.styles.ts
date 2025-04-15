import styled from 'styled-components';

export const StyledCv = styled.img`
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    padding: 20px;

    @media (max-width: 1280px) {
        max-width: 80%;
    }

    @media (max-width: 600px) {
        max-width: 90%;
    }
`;

