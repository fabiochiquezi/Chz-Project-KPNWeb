import Head from 'next/head'
import IntroSec from './Intro'
import type { NextPage } from 'next'
import { Structure } from '../structure'
import { WhatAreWeDoing } from './WhatAreWeDoing'
import { HowItWorks } from './HowItWorks'
import { JoinUs } from './JoinUs'
import Portfolio from './Portfolio'

const Home: NextPage = () => (
    <div>
        <Head>
            <title>LWF | Home</title>
            <meta name="description" content="Student Agency International" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Structure>
            <IntroSec />
            <WhatAreWeDoing />
            <HowItWorks />
            <JoinUs />
            <Portfolio />
        </Structure>
    </div>
)

export default Home
