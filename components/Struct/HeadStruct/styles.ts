import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: 40px;

    @media (min-width: 640px) {
        margin-bottom: 60px;
    }

    .logo {
        width: 115px;
        height: 54px;

        @media (min-width: 640px) {
            width: 150px;
            height: 49px;
        }
    }
`
export default Header
