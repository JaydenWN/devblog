import { Link } from "react-router-dom"

function Posts(){
    return(
        <div>
            <h1>Posts</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic provident quisquam itaque aperiam rem repellendus praesentium eius, quod unde.</p>
            <Link to='/post/1'>post 1</Link>
        </div>
    )
}
export default Posts