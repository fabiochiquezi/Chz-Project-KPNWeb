import styled from 'styled-components'

export const Section = styled.section`
    margin-top: -8px;
    margin-bottom: 50px;

    @media (min-width: 1024px) {
        margin-bottom: 90px;
    }

    @media (min-width: 1024px) {
        margin-top: -30px;
    }

    .content {
        max-width: 340px;
        margin: 0 auto;

        @media (min-width: 1024px) {
            max-width: 600px;
        }
    }

    .block {
        margin-bottom: 28px;
    }

    .block:last-child {
        margin-bottom: 0px;
    }

    h3 {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: bold;
        color: var(--blue);
        margin-bottom: 8px;
    }
`
