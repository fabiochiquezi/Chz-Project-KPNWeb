import styled from 'styled-components'

export const Div = styled.div`
    max-width: 320px;
    margin: 0 auto 48px;

    @media (min-width: 768px) {
        margin-bottom: 38px;
    }

    @media (min-width: 1024px) {
        max-width: 440px;
        margin-bottom: 54px;
    }

    .title {
        font-size: 30px;
        font-family: var(--font2);
        color: #000;
        font-weight: bold;
        margin-top: 8px;
        margin-bottom: 0px;
        display: inline-block;
        padding-left: 5px;

        @media (min-width: 1024px) {
            font-size: 32px;
        }
    }

    p {
        padding-left: 5px;
        margin-bottom: 0px;
        color: #c2bfbf;

        @media (min-width: 1024px) {
            font-size: 18px;
        }
    }
`
