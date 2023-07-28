import React from 'react'
import "./navbar.scss"
const Navbar = () => {
  return (
    <div>
         <nav>
            <ul className='Navbar'>
                {/* <li><img className='image' src={logo} alt="" /></li> */}

                <li className='nav-link' to="/products">CATALOGUE</li>
                <li className='nav-link'>FASHION</li>
                <li className='nav-link'>FAVOURITE</li>
                <li className='nav-link'>LIFESTYLE</li>
                <li className='nav-link'>
                    <li className='nav-link btn' to="/signup">SIGN UP</li>
                    
                </li>
                
            </ul>
         </nav>
    </div>
  )
}

export default Navbar