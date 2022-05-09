import Image from 'next/image'
import React from 'react'
import styles from './IntroSec.module.css'

const IntroSec: React.FC = () => {
    return (
        <section>
            <div className={styles.Wrapper + ' container'}>
                <div className={styles.Img1}>
                    <Image
                        src="/intro/left.png"
                        layout="responsive"
                        width={432}
                        height={848}
                    />
                </div>

                <div className={styles.Content}>
                    <h1>
                        International <br /> Student Agency
                    </h1>
                    <p>
                        We{"'"}re an agency of students, we <b>work</b> for{' '}
                        <b>knowledge</b> and
                        <b> network</b>. Join us.
                    </p>
                </div>
                <div className={styles.mobileIllustration}>
                    <Image
                        src="/intro/mobile-illustration-1.png"
                        layout="responsive"
                        width={331}
                        height={470}
                    />
                </div>

                <div className={styles.Img2}>
                    <Image
                        src="/intro/right.png"
                        layout="responsive"
                        width={432}
                        height={848}
                    />
                </div>
            </div>
        </section>
    )
}

export default IntroSec
