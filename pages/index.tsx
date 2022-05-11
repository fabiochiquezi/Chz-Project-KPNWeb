import Head from 'next/head'
import type { NextPage } from 'next'
import IntroSec from '../components/Sections/Intro'
import WrapStruct from '../components/Struct/WrapStruct'
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

            <WrapStruct>
                <IntroSec />
            </WrapStruct>
        </>
    )
}

export default Home
