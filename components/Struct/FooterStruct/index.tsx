import React from 'react'
import { Footer } from './styles'

const FooterStruct: React.FC = () => {
    return (
        <div className="container">
            <Footer>
                <p>
                    <span>© 2022 | KPN.</span> Todos os direitos reservados.
                </p>
            </Footer>
        </div>
    )
}

export default FooterStruct
