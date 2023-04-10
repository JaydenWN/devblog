import { useQuery, gql } from '@apollo/client'
import BlogPostCardPrev from './blogPostCardPrev'
import LANDINGCSS from './styles/landingModal.module.css'


function LandingModal(){
    const BLOGPOSTS = gql`
    query getPosts{
        posts{
          data{
            attributes{
              title
              content
            }
          }
        }
      }
    `

    const {loading, error, data} = useQuery(BLOGPOSTS)

    if (loading) return <h1>Loading...</h1>
    if (error) return <ErrorPage/>
    console.log(data)

    const latestThreePosts = data.posts.data.slice(-3)
      console.log(latestThreePosts)



    return(
        <div className={LANDINGCSS.landingModal}>
            <div className={LANDINGCSS.modalImg}> </div>
            <div className={LANDINGCSS.landingModalContent}>
                <div className="callToAction">
                    <h1>Jaydens Dev Log</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita fugiat ea aspernatur dolorum quasi laboriosam soluta laudantium recusandae vel suscipit eveniet, voluptates doloremque facilis quibusdam iure mollitia quod provident, obcaecati molestias. At reiciendis, nulla amet, libero aspernatur nisi quas fugiat esse sit accusantium provident consequatur numquam natus possimus. Tempore eaque illo delectus temporibus distinctio architecto minima modi iusto inventore porro!</p>
                    <button>Contact Me</button>
                </div>
                <div className={LANDINGCSS.blogPosts}>
                    
                    {latestThreePosts.map(posts =>(
                        <BlogPostCardPrev
                        key={posts.attributes.title}
                        title={posts.attributes.title}
                        content={posts.attributes.content.substring(0,100)+ '...'}/>
                    ))}

                </div>
            </div>
        </div>
        
    )
}
export default LandingModal