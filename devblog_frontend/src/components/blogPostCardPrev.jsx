import { Link } from 'react-router-dom'
import BLOGPOSTCSS from './styles/blogPostCardPrev.module.css'


function BlogPostCardPrev({title, content, img, link}){
    
    return(
        <Link 
        to={link}
        style={{textDecoration: 'none' }}>
        
        <div className={BLOGPOSTCSS.blogPostCardPrev}>
            <div className={BLOGPOSTCSS.prevImg}> </div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
        </Link>
    )
}
export default BlogPostCardPrev