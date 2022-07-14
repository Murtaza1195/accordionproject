import React from 'react';
import logo from '../../Assets/nexus.png';
const Header = () => {
    return (
       <header className='bg-info mb-5'>
        <nav className='d-flex flex-row justify-content-between align-items-center  '>
            <img src={logo} alt="logo" />
            <ul>
                <li><a href='#'>Home</a> </li>
                <li><a href='#'>About</a></li>
               
            </ul>
        </nav>
       </header>
    )
}

export default Header