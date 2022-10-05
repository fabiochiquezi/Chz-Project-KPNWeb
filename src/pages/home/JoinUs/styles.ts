import styled from 'styled-components'

export const Section = styled.section`
    margin-top: -10px;
    margin-bottom: 72px;

    @media (min-width: 1024px) {
        margin-bottom: 42px;
        margin-top: -18px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: center;
            gap: 50px;
        }

        .box-profession {
            margin-bottom: 38px;

            @media (min-width: 1024px) {
                margin-bottom: 0px;
            }
        }
    }

    .buttons {
        position: relative;
        top: -16px;
        display: flex;
        justify-content: center;
        gap: 16px;
    }
`
