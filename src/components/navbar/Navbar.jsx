import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#who'>Who I am</a></p>
    <p><a href='#projects'>Projects</a></p>
    <p><a href='#workexp'>Work Experience</a></p>
    <p><a href='#contacts'>Contacts</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_name'>
                    <h1>Tiago 'Asta'</h1>
                </div>
                <div className='navbar-links_container'>
                    <Menu />
                </div>
            </div>

            <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
                    : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <Menu />
                        </div>    
                    </div>
                )}
            </div>
        </div>
    )
}


export default Navbar