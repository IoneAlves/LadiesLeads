import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function HeaderHome () {
    return (
        <header className='header'>
            <section className='header_content_transparency'>
                <div className='container header_flex'>
                    <div className='header_content'>
                        <div className='header_content_img_div'>
                            <Link to='/'>
                                <img className='header_content_img' src={'assets/logos_project/logo.png'}></img>
                            </Link>
                        </div>
                        <nav className='header_content_nav'>
                            <a className='nav_link' href="/#">About</a>
                            <a className='nav_link' href="/#">Numbers</a>
                            <a className='nav_link' href="/#">Shows</a>
                            <a className='nav_link' href="/#">Info</a>
                            <Link className='nav_link' to='/search'>Search</Link>
                        </nav>
                    </div>
                    <div className='header_content_hero'>
                        <h2 className='header_content_hero_text'>supporting women leadership on tv and movies around the world</h2>                  
                    </div>
                </div>               
            </section>
        </header>
    )
};

function HeaderSearch () {
    return (
        <header className='headerSearch'>
            <section className='header_content_transparency'>
                <div className='container header_flex'>
                    <div className='header_content'>
                        <div className='header_content_img_div'>
                            <Link to='/'>
                                <img className='header_content_img' src={'assets/logos_project/logo.png'}></img>
                            </Link>
                        </div>
                        <nav className='header_content_nav'>
                            <a className='nav_link' href="/#">About</a>
                            <a className='nav_link' href="/#">Numbers</a>
                            <a className='nav_link' href="/#">Shows</a>
                            <a className='nav_link' href="/#">Info</a>
                            <Link className='nav_link' to='/search'>Search</Link>
                        </nav>
                    </div>
                </div>               
            </section>
        </header>
    )
};

export default HeaderHome
export { HeaderSearch } ;