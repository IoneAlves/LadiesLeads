import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className="footer">
            <section className="footer_box">
                 <div className="container footer_content">
                     <div className="footer_content_left">
                         <div className="footer_content_left_img">
                             <img className="footer_img_logo" src={'assets/logos_project/logo.png'} alt=""></img>
                         </div>
                         <nav className="footer_content_left_nav">
                            <a className='nav_link' href="/#">About</a>
                            <a className='nav_link' href="/#">Shows</a>
                            <a className='nav_link' href="/#">Info</a>
                            <Link className='nav_link' to='/search'>Search</Link>
                         </nav>
                     </div>
                     <div className="footer_content_rigth">
                         <div className="footer_content_rigth_img">
                             <img className="social_media" src={'assets/icons/icon-facebook.svg'} alt=""></img>
                             <img className="social_media" src={'assets/icons/icon-instagram.svg'}></img>
                             <img className="social_media" src={'assets/icons/icon-pinterest.svg'}></img>
                             <img className="social_media" src={'assets/icons/icon-twitter.svg'}></img>
                         </div>                    
                         <p className="footer_content_rigth_text">2022 Ladies Leads. &#169; All right reserved.</p>
                     </div>
                 </div>
             </section>
        </footer>
    )
}

export default Footer;