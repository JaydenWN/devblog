import { Link } from "react-router-dom"
import useAxiosGet from "../hooks/useAxiosGet"
import ErrorPage from "./error-page"

function Technologies(){
    
   const {loading, data, error} = useAxiosGet('http://localhost:1337/api/technologies')
   if (loading) return <h1>Loading...</h1>
   if (error) return <ErrorPage/>

   console.log(data.data.data)

    return(
        <div>
            <h1>Some technologies I have knowledge on:</h1>
            {data.data.data.map(techs =>(
                <Link key={techs.id} to={`/technologies/${techs.id}`}>{techs.attributes.name}</Link>
            ))}
       </div>
    )
}
export default Technologies