import React from 'react'
import './header.css';
import me from '../../assets/FotoVerticalTiago.jpg'


const Header = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'>Tiago "Asta" Gil</h1>
                <p>I am a self sufficient and driven programmer that takes a proactive approach in
delivering new and efficient tools through my programming skills. I have a track record
in developing optimised solutions that allows companies to grow and improve their
ways of working, becoming more efficient and tech-savvy.</p>
            </div>
            <div className='header-image image-cropper'>
                <img src={me} alt='me' />
            </div>
        </div>
    )
}


export default Header