import styled from 'styled-components'
import { device } from '../../../general/styles/globals'

export const FooterS = styled.footer`
    max-width: 90%;
    margin: 0 auto;
    border-top: 1px solid rgba(0, 0, 0, 0.09);
    padding-top: 15px;
    margin-bottom: 14px;
    margin-top: 0px;

    @media ${device.tablet} {
        max-width: 70%;
        /* max-width: 800px; */
    }

    p {
        text-align: center;
        color: var(--gray2);
        font-family: var(--font1);
        font-weight: bold;
        font-size: 16px;
    }

    span {
        display: block;

        @media ${device.tablet} {
            display: inline;
        }
    }

    a {
        color: var(--blue);
    }
`
