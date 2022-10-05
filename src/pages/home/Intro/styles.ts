import styled from 'styled-components'

export const Section = styled.section`
    margin-bottom: 48px;

    @media (min-width: 1024px) {
        margin-top: -40px;
        margin-bottom: 64px;
    }

    .container {
        @media (min-width: 1024px) {
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1024px) {
            margin-top: 120px;
        }
        @media (min-width: 1280px) {
            margin-top: 165px;
        }

        h1 {
            font-size: 38px;
            text-align: center;
            font-family: var(--font2);
            margin-bottom: 10px;
            font-weight: bold;
            line-height: 100%;

            @media (min-width: 768px) {
                font-size: 48px;
            }

            @media (min-width: 1024px) {
                margin-top: 90px;
                font-size: 56px;
            }

            @media (min-width: 1280px) {
                font-size: 70px;
            }
        }

        p {
            text-align: center;
            color: var(--gray1);
            font-size: 18px;
            max-width: 320px;
            margin-bottom: 24px;

            @media (min-width: 768px) {
                font-size: 22px;
                max-width: 400px;
                margin-bottom: 24px;
            }

            @media (min-width: 1024px) {
                font-size: 21px;
                margin-bottom: 62px;
            }
            @media (min-width: 1280px) {
                font-size: 23px;
                max-width: 400px;
            }
        }

        p b {
            color: var(--blue);
            font-weight: bold;
        }
    }

    .mobile-illustration {
        max-width: 262px;
        margin: 0 auto;

        @media (min-width: 768px) {
            max-width: 300px;
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
        @media (min-width: 1280px) {
            width: 340px;
        }
        @media (min-width: 1536px) {
            /* width: 420px; */
        }
    }
    .img-2 {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            width: 300px;
            margin-top: 70px;
        }
        @media (min-width: 1280px) {
            width: 340px;
        }
        @media (min-width: 1536px) {
            /* width: 420px; */
        }
    }
    .arrow-down-illustration {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            width: 35px;
        }
    }
`
