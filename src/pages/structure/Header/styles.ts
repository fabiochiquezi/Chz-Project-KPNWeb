import styled from 'styled-components'

const HeaderS = styled.header`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 32px;

    @media (min-width: 768px) {
        margin-bottom: 38px;
    }
    @media (min-width: 1024px) {
        margin-bottom: 0px;
    }

    .logo {
        width: 115px;
        height: 44px;

        @media (min-width: 1024px) {
            position: relative;
            top: 150px;
        }

        @media (min-width: 1280px) {
            top: 190px;
        }
    }
`
export default HeaderS
