import React, { FC } from 'react'
import { Div } from './styles'

interface props {
    src: string
    profession: string
    content: string
}

const BoxProfession: FC<props> = ({ src, profession, content }) => {
    return (
        <Div className="box-profession">
            <div className="wrap-img">
                <img src={src} alt="" />
            </div>
            <h4>{profession}</h4>
            <p>{content}</p>
        </Div>
    )
}

export { BoxProfession }
