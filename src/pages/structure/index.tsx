import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

type props = {
    children: React.ReactNode
}

const Structure: React.FC<props> = ({ children }) => {
    return (
        <main className="container">
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export { Structure }
