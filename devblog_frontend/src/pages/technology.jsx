import { gql, useQuery } from "@apollo/client"
import { useParams, Link } from "react-router-dom"
import ErrorPage from "./error-page"



function Technology(){
    const currentPage = useParams()

    const TECHNOLOGY = gql`
    query getTechs($id: ID!){
        technology(id: $id){
          data{
            attributes{
              name,
              posts{
                data{
                  id
                  attributes{
                    title
                  }
                }
              }
              projects{
                data{
                  id
                  attributes{
                    title
                  }
                }
              }
            }
          }
        }
      }
    `
    
    const {loading, error, data} = useQuery(TECHNOLOGY,{
        variables: {
            id: currentPage.techID
        }
    })
    console.log(data)
     
    if (loading) return <h1>Loading...</h1>
    if (error) return <ErrorPage/>


 return(
    <>
     <h1>{data.technology.data.attributes.name}</h1>

     <p>My projects built with {data.technology.data.attributes.name}:</p>
     {data.technology.data.attributes.projects.data.map(projects=>(
       <Link key={projects.attributes.title} to={`/portfolio/${projects.id}`}>{projects.attributes.title}</Link>  
     ))}

    <p>My Blog Posts related with {data.technology.data.attributes.name}:</p>
     {data.technology.data.attributes.posts.data.map(post=>(
        <Link key={post.attributes.title} to={`/post/${post.id}`}>{post.attributes.title}</Link> 
     ))}
        
    </>
   
 )   
}

export default Technology