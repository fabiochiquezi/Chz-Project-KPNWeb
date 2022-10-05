import React, { FC } from 'react'
import { Div } from './styles'

interface props {
    src: string
    title: string
    description: string
    url?: string
}

const BoxWork: FC<props> = ({ src, title, description, url }) => {
    console.log(url, 'aaa')
    const Box = () => (
        <>
            <div className="wrap-img">
                <img src={src} alt="" />
            </div>
            <span className="title">{title}</span>
            <p>{description}</p>
        </>
    )

    const BoxWithLink = () => (
        <a href={url} target="_blank" className="button-anim" rel="noreferrer">
            <Box />
        </a>
    )

    return <Div>{url && url.length ? <BoxWithLink /> : <Box />}</Div>
}

export default BoxWork
