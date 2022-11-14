import React from 'react';
import './style.css'

function About () {
    return(
        <section className='about'>
            <div className='container about_section'>
                <div className='about_content'>
                    <div className='about_content_box_img'>
                        <img className='about_img' src={'assets/images/general/image_about.jpg'} alt=""></img>     
                    </div>      
                    <div className='about_content_box_text'>
                        <h3 className='about_content_box_text_title'>WOMAN IN TV MATTERS</h3>
                        <p className='about_content_box_text_paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error. Ipsa omnis dolorum quis a incidunt voluptatem minus labore porro sed. Distinctio harum non, officiis a fugit libero maxime consequuntur!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;