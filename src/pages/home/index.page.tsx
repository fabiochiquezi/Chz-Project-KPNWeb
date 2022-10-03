import Head from 'next/head'
import IntroSec from './Intro'
import type { NextPage } from 'next'
import { Structure } from '../structure'

const Home: NextPage = () => (
    <div>
        <Head>
            <title>LWF | Home</title>
            <meta name="description" content="Student Agency International" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Structure>
            <IntroSec />
        </Structure>
    </div>
)

export default Home
