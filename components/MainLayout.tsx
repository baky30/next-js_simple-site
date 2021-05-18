import Head from "next/head";
import Link from "next/link";
import styles from "../styles/navbar.module.scss"

export default function MainLayout({children, title='NextJS App'}) {
    return (
        <>
            <Head>
                <title>{title} | NextJS</title>
                <meta name="keywords" content="next, javascripts, nextjs, react" />
                <meta name="description" content="next js tutorial from youtube" />
                <meta charSet="utf-8" />
            </Head>
            <nav className={styles.nav}>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/posts"><a>Posts</a></Link>
            </nav>   
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}
