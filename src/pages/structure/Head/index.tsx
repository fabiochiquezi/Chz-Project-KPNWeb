import React from 'react'
import Image from 'next/image'
import HeaderS from './styles'

const Header: React.FC = () => {
    return (
        <HeaderS>
            <div className="logo">
                <Image
                    alt="KPN Logo"
                    src="/logo.svg"
                    width={115}
                    height={54}
                    layout="responsive"
                />
            </div>
        </HeaderS>
    )
}

export { Header }
