import React from 'react';
import './style.css'

function Info () {
    return(
        <section className='info'>
            <div className='container info_section'>
                <div className='info_content'>   
                    <div className='info_content_box_text'>
                        <h3 className='info_content_box_text_title'>STORIES TOLD BY WOMAN ARE IMPORTANT</h3>
                        <p className='info_content_box_text_paragraph'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, error. Ipsa omnis dolorum quis a incidunt voluptatem minus labore porro sed. Distinctio harum non, officiis a fugit libero maxime consequuntur!</p>
                    </div>
                    <div className='info_content_box_img'>
                        <img className='info_img' src={'assets/images/general/image_streaming_services.jpg'} alt=""></img>     
                    </div>   
                </div>
            </div>
        </section>
    );
};

export default Info;

