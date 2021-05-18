import Head from "next/head"
import Router from "next/router"
import MainLayout from "../../components/MainLayout"

export default function About() {
    const btnClickHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title="About Page"> 
            
            <h1>About Us</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium vero ad quasi amet recusandae modi corrupti eius optio praesentium!</p>

            <button onClick={btnClickHandler} >Go back to home</button>
            <button onClick={() => Router.push('/posts')} >Go to posts</button>
        </MainLayout>
    )
}
