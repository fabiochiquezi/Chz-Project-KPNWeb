import styled from 'styled-components'

export const Section = styled.section`
    .container{
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

            @media (min-width: 1024px) {
                font-size: 60px;
            }

            @media (min-width: 1280px) {
                font-size: 75px;
            }

            @media (min-width: 1536px) {
                margin-bottom: 30px;
                font-size: 102px;
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

            @media (min-width: 1024px) {
                font-size: 21px;
                margin-bottom: 62px;
            }
            @media (min-width: 1280px) {
                font-size: 24px;
            }
            @media (min-width: 1536px) {
                font-size: 32px;
                max-width: 600px;
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
        @media(min-width: 1280px){
            width: 380px;
        }
        @media(min-width: 1536px){
            width: 420px;
        }
    }
    .img-2 {
        display: none;

        @media (min-width: 1024px) {
            display: block;
            width: 300px;
            margin-top: 70px;
        }
        @media(min-width: 1280px){
            width: 380px;
        }
        @media(min-width: 1536px){
            width: 420px;
        }
    }
    .arrow-down-illustration{
        display: none ;
        @media (min-width: 1024px){
            display: block;
            width: 35px;
        }
        @media (min-width: 1280px){
            width: 50px;
        }
    }
`
