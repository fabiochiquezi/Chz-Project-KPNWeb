import GlobalCSS from '../styles/globals'
import ResetCSS from '../styles/reset'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ResetCSS />
            <GlobalCSS />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
