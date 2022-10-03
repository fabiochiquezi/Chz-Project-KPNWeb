import GlobalCSS from '../general/styles/globals'
import ResetCSS from '../general/styles/reset'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => (
    <div>
        <ResetCSS />
        <GlobalCSS />
        <Component {...pageProps} />
    </div>
)

export default MyApp
