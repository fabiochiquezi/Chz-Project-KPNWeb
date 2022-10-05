import React from 'react'
import { Title } from '../../../components/Titles/Default'
import Div from './styles'

const WhatAreWeDoing: React.FC = () => {
    return (
        <Div>
            <Title title="What are we doing?">
                <p>
                    Bringing together students who want to work in exchange for{' '}
                    <b> knowledge</b>, <b> portfolio</b> and <b> network</b> on
                    open-source projects.
                </p>
            </Title>

            <div className="content">
                <div className="wrap-img">
                    <picture>
                        <source
                            srcSet="./sec-what-are-doing/illustration-2.png"
                            media="(min-width: 1024px)"
                        />
                        <img
                            src="./sec-what-are-doing/illustration-1.png"
                            alt="example"
                        />
                    </picture>
                </div>

                <ul>
                    <li>
                        <div className="ball">1</div>
                        <div className="text">
                            <h5>Knowledge</h5>
                            <p>
                                Exchange ideas and experiences with people from
                                all over the world.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="ball">2</div>
                        <div className="text">
                            <h5>Portfolio</h5>
                            <p>
                                Alone you just do simple and boring things.
                                Together we will build great projects!
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="ball">3</div>
                        <div className="text">
                            <h5>Network</h5>
                            <p>
                                Making friends and joining a community is a very
                                important part of the process.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </Div>
    )
}

export { WhatAreWeDoing }
