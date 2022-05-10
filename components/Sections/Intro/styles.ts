import styled from 'styled-components'

export const Section = styled.section`
    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1024px) {
            margin-top: 120px;
        }

        h1 {
            font-size: 46px;
            text-align: center;
            font-family: var(--font2);
            margin-bottom: 14px;
            font-weight: bold;
            line-height: 100%;

            @media (min-width: 768px) {
                font-size: 72px;
                margin-bottom: 22px;
            }
        }

        p {
            text-align: center;
            color: var(--gray1);
            font-size: 18px;
            max-width: 320px;
            margin-bottom: 30px;

            @media (min-width: 768px) {
                font-size: 24px;
                max-width: 500px;
                margin-bottom: 34px;
            }
        }

        p b {
            color: var(--blue);
            font-weight: bold;
        }
    }

    .mobile-illustration {
        max-width: 332px;
        margin: 0 auto;

        @media (min-width: 768px){
            max-width: 420px;
        }

        @media (min-width: 1024px) {
            display: none;
        }
    }

    .img-1 {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            width: 300px;
        }
    }
    .img-2 {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            width: 300px;
            margin-top: 70px;
        }
    }
`
