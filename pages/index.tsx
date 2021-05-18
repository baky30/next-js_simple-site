import Link from 'next/link'
import Head from 'next/head'
import MainLayout from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout title="NextJS Tutorial">
            
            <h1>Hello NextJS</h1>
            <p><Link href="/about"><a> About </a></Link></p>
            <p><Link href="/posts"><a> Posts </a></Link></p>
            <hr/>
            <p>Lorem ipsum <Link href="/error"><a>dolor</a></Link> sit amet consectetur adipisicing.</p>
        </MainLayout>
    )
}
