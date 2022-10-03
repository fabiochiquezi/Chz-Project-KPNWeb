import React from 'react'
import { Header } from './Head'
import { Footer } from './Footer'

type props = {
    children: React.ReactNode
}

const Structure: React.FC<props> = ({ children }) => {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export { Structure }
