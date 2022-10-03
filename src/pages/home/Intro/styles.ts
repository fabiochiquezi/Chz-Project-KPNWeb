import styled from 'styled-components'
import { device } from '../../../general/styles/globals'

export const Section = styled.section`
    .container {
        @media ${device.desktopS} {
            display: flex;
            justify-content: center;
            flex-wrap: nowrap;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media ${device.desktopS} {
            margin-top: 120px;
        }
        @media ${device.desktopM} {
            margin-top: 165px;
        }

        h1 {
            font-size: 46px;
            text-align: center;
            font-family: var(--font2);
            margin-bottom: 14px;
            font-weight: bold;
            line-height: 100%;

            @media ${device.tablet} {
                font-size: 72px;
                margin-bottom: 22px;
            }

            @media ${device.desktopS} {
                font-size: 60px;
            }

            @media ${device.desktopM} {
                font-size: 75px;
            }

            @media ${device.desktopL} {
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

            @media ${device.tablet} {
                font-size: 24px;
                max-width: 500px;
                margin-bottom: 34px;
            }

            @media ${device.desktopS} {
                font-size: 21px;
                margin-bottom: 62px;
            }
            @media ${device.desktopM} {
                font-size: 24px;
            }
            @media ${device.desktopL} {
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

        @media ${device.tablet} {
            max-width: 420px;
        }

        @media ${device.desktopS} {
            display: none;
        }
    }
    .img-1 {
        display: none;

        @media ${device.desktopS} {
            display: block;
            width: 300px;
        }
        @media ${device.desktopM} {
            width: 380px;
        }
        @media ${device.desktopL} {
            width: 420px;
        }
    }
    .img-2 {
        display: none;

        @media ${device.desktopS} {
            display: block;
            width: 300px;
            margin-top: 70px;
        }
        @media ${device.desktopM} {
            width: 380px;
        }
        @media ${device.desktopL} {
            width: 420px;
        }
    }
    .arrow-down-illustration {
        display: none;
        @media ${device.desktopS} {
            display: block;
            width: 35px;
        }
        @media ${device.desktopM} {
            width: 50px;
        }
    }
`
