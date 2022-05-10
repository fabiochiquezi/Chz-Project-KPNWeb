import Head from 'next/head'
import type { NextPage } from 'next'
import HeadStruct from '../components/Struct/HeadStruct'
import IntroSec from '../components/Sections/Intro'
// import WhatAreWeDoing from '../components/Sections/WhatAreWeDoing'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>LWF | Home</title>
                <meta
                    name="description"
                    content="Student Agency International"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <HeadStruct />
                <IntroSec />
                {/* <WhatAreWeDoing /> */}
            </main>
        </>
    )
}

export default Home
