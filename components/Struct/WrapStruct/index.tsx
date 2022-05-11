import React from 'react'
import FooterStruct from '../FooterStruct'
import HeadStruct from '../HeadStruct'

// import { Container } from './styles';

type props = {
    children: React.ReactNode
}

const WrapStruct: React.FC<props> = ({ children }) => {
    return (
        <main>
            <HeadStruct />
            {children}
            <FooterStruct />
        </main>
    )
}

export default WrapStruct
