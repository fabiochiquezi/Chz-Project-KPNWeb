import styled from 'styled-components'

const Div = styled.div`
    margin-bottom: 64px;

    @media (min-width: 1024px) {
        margin-bottom: 120px;
    }
    @media (min-width: 1280px) {
        margin-bottom: 90px;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (min-width: 1280px) {
            flex-direction: row;
            margin-top: -38px;
        }
        @media (min-width: 1520px) {
            justify-content: center;
            margin-top: -48px;
        }
    }

    .wrap-img {
        order: 2;
        margin-top: -18px;
        max-width: 280px;
        margin-bottom: 12px;

        @media (min-width: 1024px) {
            margin-bottom: 0px;
            display: none;
        }

        @media (min-width: 1280px) {
            display: block;
            margin-top: 0px;
            order: 1;
            max-width: 50%;
            position: relative;
            right: -90px;

            img {
                width: 88%;
            }
        }

        @media (min-width: 1520px) {
            right: -124px;
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        order: 1;
        width: 100%;

        @media (min-width: 1024px) {
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 0px;
        }
        @media (min-width: 1280px) {
            order: 2;
        }

        @media (min-width: 1280px) {
            flex-direction: column;
            max-width: 50%;
            margin-top: 70px;
            padding-left: 50px;
        }

        @media (min-width: 1520px) {
            padding-left: 10px;
        }
    }

    li {
        max-width: 320px;
        margin-bottom: 32px;
        align-items: center;

        @media (min-width: 1024px) {
            max-width: 290px;
            margin-bottom: 0px;
        }

        @media (min-width: 1280px) {
            display: flex;
            max-width: 100%;
            margin-bottom: 48px;
        }

        .ball {
            margin: 0 auto;
            margin-bottom: 10px;
            font-size: 68px;
            width: 109px;
            height: 109px;
            border-radius: 50%;
            border: 4px solid #ddd;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (min-width: 1280px) {
                margin-right: 24px;
                margin-bottom: 0px;
            }
        }

        .text {
            @media (min-width: 1280px) {
                max-width: 400px;
            }
        }

        h5 {
            text-align: center;
            font-size: 32px;
            margin-bottom: 16px;
            font-weight: bold;

            @media (min-width: 1280px) {
                text-align: left;
                margin-bottom: 5px;
            }
        }

        p {
            font-size: 18px;
            text-align: center;

            @media (min-width: 1024px) {
                text-align: left;
                margin-bottom: 0px;
            }
        }
    }

    li:nth-child(1) .ball,
    li:nth-child(1) h5 {
        color: #f0ea47;
        border-color: #f0ea47;
    }
    li:nth-child(2) .ball,
    li:nth-child(2) h5 {
        color: var(--blue);
        border-color: var(--blue);
    }
    li:nth-child(3) .ball,
    li:nth-child(3) h5 {
        color: var(--red);
        border-color: var(--red);
    }
`
export default Div
