import React, { FC } from 'react'
import { GithubIcon } from '../../../../public/icons/GithubIcon'
import { InstagramIcon } from '../../../../public/icons/Instagram'
import { LinkedinIcon } from '../../../../public/icons/Linkedin'
import { Div } from './styles'

interface props {
    src: string
    name: string
    role: string
}

const TeamPlayer: FC<props> = ({ src, name, role }) => {
    return (
        <Div className="team-player">
            <div className="wrap-img">
                <img src={src} alt="" />
            </div>
            <h4>{name}</h4>
            <p>{role}</p>

            <ul className="social-media">
                <li>
                    <a href="">
                        <LinkedinIcon />
                    </a>
                </li>
                <li>
                    <a href="">
                        <GithubIcon />
                    </a>
                </li>
                <li>
                    <a href="">
                        <InstagramIcon />
                    </a>
                </li>
            </ul>
        </Div>
    )
}

export { TeamPlayer }
