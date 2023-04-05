import {Link, Outlet} from 'react-router-dom'

function Navbar(){
    return(
      <>
        <Link to='/'>Jayden's Web Playground</Link>
        <Link to='/posts'>Blog Posts</Link>
        <Link to='/technologies'>Technologies</Link>
        <Link to='/portfolio'>Portfolio</Link>

  
        <Outlet> </Outlet>
      </>
    )
  }
export default Navbar