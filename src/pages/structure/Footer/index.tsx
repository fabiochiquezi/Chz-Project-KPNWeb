import React from 'react'
import { FooterS } from './styles'

const Footer: React.FC = () => {
    return (
        <div className="container">
            <FooterS>
                <p>
                    This project is on GitHub:{' '}
                    <a href="https://github.com/fabiochiquezi/Chz-ProjectKPN-Web">
                        KPN Project
                    </a>
                </p>
            </FooterS>
        </div>
    )
}

export { Footer }
