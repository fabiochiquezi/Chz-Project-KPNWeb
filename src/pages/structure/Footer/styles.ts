import styled from 'styled-components'
import { device } from '../../../general/styles/globals'

export const FooterS = styled.footer`
    max-width: 90%;
    margin: 0 auto;
    border-top: 1px solid var(--gray1);
    padding-top: 10px;
    margin-bottom: 20px;
    margin-top: 78px;

    @media ${device.tablet} {
        max-width: 70%;
        max-width: 800px;
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
`
