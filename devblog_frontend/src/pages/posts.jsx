import { Link } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import useAxiosGet from "../hooks/useAxiosGet"
import ErrorPage from "./error-page"



function Posts(){
   const { loading, data, error } = useAxiosGet('http://localhost:1337/api/posts')
   console.log(data)
   if (loading) return <h1>Loading...</h1>
   if (error) return <ErrorPage/>

    return(
        <div>
            <h1>Posts</h1>
            {data.data.data.map(post =>(
                <div key={post.id}>
                    <h2>{post.attributes.title}</h2>
                    <p>{post.attributes.content.substring(0, 200)+'...'}</p>
                    <Link to={`/post/${post.id}`}>read more</Link>
                </div>
            ))}
            
            
        </div>
    )
}
export default Posts