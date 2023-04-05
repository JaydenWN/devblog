import { Link } from "react-router-dom"

function Portfolio(){
    return(
        <div>
            <h1>My Portfolio</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic provident quisquam itaque aperiam rem repellendus praesentium eius, quod unde.</p>
            <Link to='/portfolio/1'>Project 1</Link>
        </div>
    )
}
export default Portfolio