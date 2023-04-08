import { useParams } from "react-router-dom"
import useAxiosGet from "../hooks/useAxiosGet"

function Post(){
    const currentPage = useParams()
    console.log(currentPage)
    const {loading, error, data} = useAxiosGet(`http://localhost:1337/api/posts/${currentPage.postID}`)

    console.log(data)
    if (loading) return <h1>Loading...</h1>
    if (error) return <ErrorPage/>

    return(
        <div>
            <h1>{data.data.data.attributes.title}</h1>
            <p>{data.data.data.attributes.content}</p>

            
        </div>
    )
}
export default Post