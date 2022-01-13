import {React, useState } from 'react';
import { Link } from 'react-router-dom'

import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/hades2.svg'
import './Navbar.scss';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu=()=>(
        <>
            <p><Link to="/#home" target='_parent'>Home</Link></p>
            <p><Link to="/#brand" target='_parent'>Tech Stack</Link></p>
            <p><Link to="/#wgpt3" target='_parent'>What is Hades</Link></p>
            <p><Link to="/#features" target='_parent'>Case Studies</Link></p>
        </>
    )
    
    const Sign=()=>(
        <Link to='/login' target='_blank'>
            <button type="button">Login</button>
        </Link>
    )

    return (
        <div className="gpt3__navbar">
           
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <a href='https://github.com/4bdul4ziz/Artificial-Conversation-Entity'><img src={logo} alt='HADES Logo'/></a>
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <Sign/>
            </div>
            <div className="gpt3__navbar-menu">
                {
                    toggleMenu
                    ? 
                    <RiCloseLine 
                    color="#fff" 
                    size={27} 
                    onClick={() => setToggleMenu(false)} 
                    />
                    : 
                    <RiMenu3Line 
                    color="#fff" 
                    size={27} 
                    onClick={() => setToggleMenu(true)} 
                    />
                }
                {
                    toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links">
                                <Menu/>
                            </div>
                            <div className="gpt3__navbar-menu_container-links-sign">
                                <Sign/>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Navbar;