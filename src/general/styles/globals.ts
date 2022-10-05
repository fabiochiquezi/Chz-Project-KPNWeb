import { createGlobalStyle } from 'styled-components'

export const device = {
    mobile: '(min-width: 360px)',
    mobileL: '(min-width: 640px)',
    tablet: '(min-width: 768px)',
    desktopS: '(min-width: 1024px)',
    desktopM: '(min-width: 1280px)',
    desktopL: '(min-width: 1536px)',
}

export default createGlobalStyle`
    :root {
        --font1: 'Lato', sans-serif;
        --font2: 'Cormorant Garamond', serif;

        --blue: #70b3fe;
        --yellow: #fef970;
        --red: #fc4040;
        --green: #12e3ad;
        --gray1: #c2bfbf;
        --gray2: #424242;
    }

    /* Fonts */
    body,
    html {
        font-family: var(--font1);
        color: var(--gray1);
    }
    h1, h2, h3, h4, h5, h6, b {
        color: var(--gray2);
    }

    /* Structure */
    .container {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding: 0px 15px;
    }
    @media ${device.mobileL} {
        .container {
            width: 100%;
            max-width: 640px;
        }
    }
    @media ${device.tablet} {
        .container { max-width: 768px; }
    }
    @media ${device.desktopS} {
        .container { max-width: 1024px; }
    }
    @media ${device.desktopM} {
        .container { max-width: 1280px; }
    }
    @media ${device.desktopL} {
        .container { max-width: 1536px; }
    }

    /* ScrollBar */
    body::-webkit-scrollbar {
        width: 6px;
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar-track {
        border: none;
        outline: none;
    }
    body::-webkit-scrollbar-thumb {
        background-color: var(--blue);
        border: none;
        outline: none;
    }

    /* General */
    .wrap-img img {
        max-width: 100%;
        width: 100%;
    }

    /* Sections */
    .sec {
        margin-bottom: 48px;

        @media (min-width: 1024px) {
            margin-bottom: 99px;
        }
    }

    /* Animations */
    .button-anim{
        transition: all .25s ease;
    }
    .button-anim:hover{
        opacity: 0.8;
    }
    .button-anim:active{
        transform: scale(0.98);
    }
`
