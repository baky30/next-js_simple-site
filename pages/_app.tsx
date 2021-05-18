import '../styles/main.scss';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp ({ Component, pageProps }) {
    return (
        <>
            <NextNprogress
                color="yellow"
                startPosition={0.3}
                height="3"
                stopDelayMs={200}
            />
            <Component {...pageProps} />
        </>
    )
}
