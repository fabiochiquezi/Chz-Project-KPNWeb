import React from 'react'
import { FooterS } from './styles'

const Footer: React.FC = () => {
    return (
        <div className="container">
            <FooterS>
                <p>
                    <span>© 2022 | KPN.</span> Todos os direitos reservados.
                </p>
            </FooterS>
        </div>
    )
}

export { Footer }
