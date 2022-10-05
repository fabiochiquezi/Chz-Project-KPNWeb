import styled from 'styled-components'
import { device } from '../../../general/styles/globals'

export const Section = styled.section`
    margin-bottom: 48px;

    @media (min-width: 1024px) {
        margin-top: -40px;
        margin-bottom: 64px;
    }

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
            font-size: 38px;
            text-align: center;
            font-family: var(--font2);
            margin-bottom: 10px;
            font-weight: bold;
            line-height: 100%;

            @media ${device.tablet} {
                font-size: 48px;
            }

            @media ${device.desktopS} {
                margin-top: 90px;
                font-size: 56px;
            }

            @media ${device.desktopM} {
                font-size: 70px;
            }
        }

        p {
            text-align: center;
            color: var(--gray1);
            font-size: 18px;
            max-width: 320px;
            margin-bottom: 24px;

            @media ${device.tablet} {
                font-size: 22px;
                max-width: 400px;
                margin-bottom: 24px;
            }

            @media ${device.desktopS} {
                font-size: 21px;
                margin-bottom: 62px;
            }
            @media ${device.desktopM} {
                font-size: 23px;
                max-width: 400px;
            }
            @media ${device.desktopL} {
                /* font-size: 32px; */
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

        @media ${device.tablet} {
            max-width: 300px;
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
            width: 340px;
        }
        @media ${device.desktopL} {
            /* width: 420px; */
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
            width: 340px;
        }
        @media ${device.desktopL} {
            /* width: 420px; */
        }
    }
    .arrow-down-illustration {
        display: none;

        @media ${device.desktopS} {
            display: block;
            width: 35px;
        }
    }
`
