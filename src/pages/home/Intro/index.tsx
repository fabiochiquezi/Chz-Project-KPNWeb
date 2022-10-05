import Image from 'next/image'
import React from 'react'
import { Section } from './styles'

const IntroSec: React.FC = () => {
    return (
        <Section>
            <div className="container">
                <div className="img-1">
                    <Image
                        src="/sec-intro/left.png"
                        layout="responsive"
                        width={432}
                        height={848}
                    />
                </div>

                <div className="content">
                    <h1>
                        An International <br /> Student Group
                    </h1>
                    <p>
                        We&apos;re a group of students, we <b>work</b> for
                        <b> knowledge</b> and
                        <b> friendship</b>. Join us.
                    </p>
                    <div className="wrap-img arrow-down-illustration">
                        <Image
                            src="/icons/arrow-down-illustration-1.svg"
                            layout="responsive"
                            width={55}
                            height={168}
                        />
                    </div>
                </div>

                <div className="mobile-illustration wrap-img">
                    <picture>
                        <source
                            srcSet="/sec-intro/tablet-illustration-1.png"
                            media="(min-width: 600px)"
                        />
                        <img
                            src="/sec-intro/mobile-illustration-1.png"
                            alt="Illustration of sec-intro"
                        />
                    </picture>
                </div>

                <div className="img-2">
                    <Image
                        src="/sec-intro/right.png"
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
