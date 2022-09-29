import { faBars, faCartShopping, faUser, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'

const Navbar = ({cartItems}) => {
    
    return (

        <div>
            <div className='navbar'>

                <Link className='logo' to="/">
                    <FontAwesomeIcon icon={faUtensils} color="#27ae60" />
                    Resto.
                </Link>

                <nav>
                    <NavLink className="navLink" end='true' activeclassname="active" to='/'>
                        Home
                    </NavLink>
                    <NavLink className="navLink" end='true' activeclassname="active" to='/menu'>
                        Menu
                    </NavLink>
                    <NavLink className="navLink" end='true' activeclassname="active" to='/about'>
                        About
                    </NavLink>
                </nav>

                <div> 
                    <FontAwesomeIcon className='icons' id="menuBars" icon={faBars} color="##192a56" />
                    <Link end='true' to='/cart'><span><FontAwesomeIcon className='icons' icon={faCartShopping} color="##192a56" />({cartItems.length})</span></Link>
                    <FontAwesomeIcon className='icons' icon={faUser} color="##192a56" />
                </div>   
               
            </div>
        </div>

    )

}


export default Navbar