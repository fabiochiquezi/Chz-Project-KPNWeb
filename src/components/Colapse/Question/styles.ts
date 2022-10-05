import styled from 'styled-components'

export const Div = styled.div`
    padding: 22px 0px;
    border-top: 1px solid #ddd;

    @media (min-width: 1024px) {
        padding: 24px 0px;
    }

    h6 {
        font-size: 20px;
        font-family: var(--font2);
        font-weight: bold;
        cursor: pointer;
        margin-bottom: 0px;
        transition: all 0.2s ease;

        @media (min-width: 1024px) {
            font-size: 22px;
        }

        &:hover {
            opacity: 0.5;
        }
    }

    p {
        margin-top: 8px;
        font-size: 16px;
        margin-bottom: 0px;
        padding: 0px 14px;

        @media (min-width: 1024px) {
            font-size: 17px;
        }
    }
`
