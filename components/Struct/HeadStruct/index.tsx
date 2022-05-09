import React from 'react'
import Image from 'next/image'
import Header from './styles'

const HeadStruct: React.FC = () => {
    return (
        <Header>
            <a href="" className="logo">
                <Image
                    alt="KPN Logo"
                    src="/logo.svg"
                    width={115}
                    height={54}
                    layout="responsive"
                />
            </a>
        </Header>
    )
}

export default HeadStruct
