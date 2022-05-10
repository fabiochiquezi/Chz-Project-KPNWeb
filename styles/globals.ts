import { createGlobalStyle } from 'styled-components'

export const device = {
    mobile: '360px',
    mobileL: '640px',
    tablet: '768px',
    desktopS: '1024px',
    desktopM: '1280px',
    desktopL: '1536px'
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
`
