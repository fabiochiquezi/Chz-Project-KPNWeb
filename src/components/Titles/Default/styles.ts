import styled from 'styled-components'

export const Div = styled.div`
    max-width: 320px;
    margin: 0 auto 48px auto;

    @media (min-width: 768px) {
        max-width: 480px;
        margin-bottom: 48px;
    }

    @media (min-width: 1024px) {
        max-width: 520px;
    }

    h2 {
        text-align: center;
        margin-bottom: 6px;
        font-size: 36px;
        font-family: var(--font2);
        font-weight: bold;

        @media (min-width: 1024px) {
            font-size: 46px;
        }
    }

    p {
        font-size: 18px;
        text-align: center;

        @media (min-width: 1024px) {
            font-size: 20px;
            text-align: center;
        }
    }
`
