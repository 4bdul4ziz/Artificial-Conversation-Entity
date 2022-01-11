import {React, useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './Navbar.scss';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu=()=>(
        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
    
    const Sign=()=>(
        <>
            <p>Sign in</p>
            <button type="button">Sign up</button>
        </>
    )

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt='HADES Logo'/>
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