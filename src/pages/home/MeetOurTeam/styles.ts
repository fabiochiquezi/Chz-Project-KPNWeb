import styled from 'styled-components'

export const Section = styled.section`
    margin-top: -12px;

    @media (min-width: 1024px) {
        margin-top: -28px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: center;
            gap: 48px;
        }

        .team-player {
            margin-bottom: 38px;

            @media (min-width: 1024px) {
                margin-bottom: 0px;
            }
        }
    }
`
