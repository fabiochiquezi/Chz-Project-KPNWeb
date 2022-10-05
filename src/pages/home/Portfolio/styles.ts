import styled from 'styled-components'

export const Section = styled.section`
    .content {
        position: relative;
        top: -16px;

        @media (min-width: 768px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1280px) {
            max-width: 1020px;
            margin: 0 auto;
        }
    }
`
