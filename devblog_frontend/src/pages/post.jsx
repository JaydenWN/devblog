import { useParams } from "react-router-dom"
import useAxiosGet from "../hooks/useAxiosGet"
import { gql, useQuery } from "@apollo/client"
import { Link } from "react-router-dom"


function Post(){
    const currentPage = useParams()
    console.log(currentPage.postID)

    const POST = gql`
    query getPosts($id: ID!) {
        post(id: $id) {
          data {
            
            attributes {
                title,
                content,
                projects{
                  data{
                    id
                    attributes{
                      title
                    }
                  }
                }
              technologies {
                data {
                    id,
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `
    const {loading, error, data} = useQuery(POST, {
        variables: {id: currentPage.postID}
    })
    console.log(data)
    
    if (loading) return <h1>Loading...</h1>
    if (error) return <ErrorPage/>

    return(
        <div>
            <h1>{data.post.data.attributes.title}</h1>
            <p>{data.post.data.attributes.content}</p>
            {data.post.data.attributes.technologies.data.map(techs=>(
                <Link key={techs.id} to={`/technologies/${techs.id}`}>{techs.attributes.name}</Link>
            ))}
        </div>
    )
}
export default Post