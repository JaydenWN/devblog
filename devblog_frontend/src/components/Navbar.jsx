import {Link, NavLink, Outlet} from 'react-router-dom'
import NAVCSS from './styles/navbar.module.css'

function Navbar(){
    return(
      <>
      
        <nav>
          <ul>
            <li>
            <NavLink
              to='/'
              className={({isActive, isPending}) => 
              isPending ? NAVCSS.pending : isActive ? NAVCSS.active + ` ${NAVCSS.logo}` : NAVCSS.logo}>
                Jaydens Dev Logs

            </NavLink>
            </li>
            <li>
            <NavLink
              to='/posts'
              className={({isActive, isPending}) => 
              isPending ? NAVCSS.pending : isActive ? NAVCSS.active : ''}>
                Blog Posts

            </NavLink>
            </li>
            <li>
            <NavLink
              to='/technologies'
              className={({isActive, isPending}) => 
              isPending ? NAVCSS.pending : isActive ? NAVCSS.active : ''}>
                Technologies

            </NavLink>
            </li>
            <li>
            <NavLink
              to='/portfolio'
              className={({isActive, isPending}) => 
              isPending ? NAVCSS.pending : isActive ? NAVCSS.active : ''}>
                Portfolio

            </NavLink>
            </li>
          </ul>
        
        

  
        
        </nav>
        <Outlet/>
      </>
    )
  }
export default Navbar