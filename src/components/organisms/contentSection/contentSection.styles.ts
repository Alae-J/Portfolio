import styled from 'styled-components';

export const ContentWrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    background: ${({ theme }) => theme.colors.content};
    grid-column: 3 / 13;
    grid-row: 1 / 4;
    overflow-y: scroll;
    padding: 0 20px 20px 20px; // only bottom and sides
    margin-top: 0; // ensure no top margin

    @media (max-width: 1280px) {
        grid-column: 2 / 13;
    }

    @media (max-width: 1000px) {
        grid-column: 1 / 13;
        padding: 0 10px 10px 10px;
    }

    @media (max-width: 580px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 90vh;
        margin: 0;
        padding: 0;
    }
`;

