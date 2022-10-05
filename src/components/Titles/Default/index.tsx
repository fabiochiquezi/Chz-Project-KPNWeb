import React, { FC, ReactElement } from 'react'
import { Div } from './styles'

interface props {
    title: string
    children?: ReactElement
}

const Title: FC<props> = ({ title, children }) => (
    <Div>
        <h2>{title}</h2>
        {children && children}
    </Div>
)

export { Title }
