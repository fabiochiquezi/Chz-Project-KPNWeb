import Image from 'next/image'
import React from 'react'
import { Section } from './styles'

const IntroSec: React.FC = () => {
    return (
        <Section>
            <div className="container">
                <div className="img-1">
                    <Image
                        src="/intro/left.png"
                        layout="responsive"
                        width={432}
                        height={848}
                    />
                </div>

                <div className="content">
                    <h1>
                        International <br /> Student Agency
                    </h1>
                    <p>
                        We{"'"}re an agency of students, we <b>work</b> for{' '}
                        <b>knowledge</b> and
                        <b> network</b>. Join us.
                    </p>
                </div>

                <div className="mobile-illustration wrap-img">
                    <picture>
                        <source
                            srcSet="/intro/tablet-illustration-1.png"
                            media="(min-width: 600px)"
                        />
                        <img
                            src="/intro/mobile-illustration-1.png"
                            alt="Illustration of Intro"
                        />
                    </picture>
                </div>

                <div className="img-2">
                    <Image
                        src="/intro/right.png"
                        layout="responsive"
                        width={432}
                        height={848}
                    />
                </div>
            </div>
        </Section>
    )
}

export default IntroSec
