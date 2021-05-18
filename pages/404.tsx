import Link from "next/link";
import MainLayout from "../components/MainLayout";
import styles from '../styles/error.module.scss'

export default function ErrorPage () {
    return (
        <MainLayout>
            <h1 className={styles.error}>Error 404</h1>
            <p>Go back to <Link href="/"><a>home</a></Link> page</p>
        </MainLayout>
    )
}