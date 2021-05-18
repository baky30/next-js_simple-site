import { NextPageContext } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../components/MainLayout";
import { MyPost } from "../interfaces/post";

interface PostPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts }: PostPageProps ) {
    const [posts, setPosts] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts`)
            const json = await response.json()

            setPosts(json)
        }

        if(!serverPosts) load();
    }, []);

    if(!posts) {
        return (
            <MainLayout>
                <h3>Loading ...</h3>
            </MainLayout>
        )
    }


    return (
        <MainLayout title="Posts Page">
            <h1>posts page</h1>

            <ul>
                { posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                )) }
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if(!req) return { posts: null }
    
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json();
    
    return {
        posts
    }
}
