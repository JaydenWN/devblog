import { useQuery, gql } from "@apollo/client"
import { Link, useParams } from "react-router-dom"
import ErrorPage from "./error-page"



function Project(){
    const currentPage = useParams()

    const PROJECT = gql`
    query getProject($id: ID) {
        project(id: $id) {
          data {
            attributes {
              technologies {
                data {
                  id
                  attributes {
                    name
                  }
                }
              }
              title
              description
              posts{
                data {
                  id
                  attributes {
                    title
                  }
                }
              }
            }
          }
        }
      }
    `

    const {loading, error, data} = useQuery(PROJECT, {
        variables: {
            id: currentPage.projectID
        }
    })

    console.log(data)

    if (loading) return <h1>Loading...</h1>
    if (error) return <ErrorPage/>
    
    return(
        <div>
        <h1>{data.project.data.attributes.title}</h1>
        <p>{data.project.data.attributes.description}</p>

        <p>Technologies Used:</p>
        {data.project.data.attributes.technologies.data.map(techs=>(
            <Link key={techs.id} to={`/technologies/${techs.id}`}>{techs.attributes.name}</Link>
        ))}

        <p>Blog Posts Related:</p>
        {data.project.data.attributes.posts.data.map(posts=>(
            <Link key={posts.id} to={`/technologies/${posts.id}`}>{posts.attributes.title}</Link>
        ))}
        </div>
    )
}
export default Project