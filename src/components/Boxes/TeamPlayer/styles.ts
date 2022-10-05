import styled from 'styled-components'

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 200px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    width: 320px;
    height: 240px;
    justify-content: center;
    border-radius: 10px;

    .wrap-img {
        width: 90px;
        height: 90px;
        margin-bottom: 6px;
    }

    h4 {
        font-size: 21px;
        font-weight: bold;
        margin-bottom: 5px;
    }

    p {
        text-align: center;
        margin-bottom: 8px;
    }

    .social-media {
        display: flex;
        margin-bottom: 0px;

        li + li {
            margin-left: 10px;
        }

        a {
            padding: 4px;
            margin-left: -4px;
            margin-top: -4px;
        }
    }
`
