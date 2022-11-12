import React from 'react';
import './style.css'
import Search from '../Search';
import { useState } from 'react';


function MainSearch (props) {

    const [valorInicial , novoValor] = useState('teste')
    
    function searchActress () {
        novoValor = React.getElementById('tvShow').value;        
    }

    return (
        <section className='search'>
            <div className='container main_container_search search_box'>
                <div className='search_content'>
                    <div className='search_content_form'>
                        <form className="form" action=''>
                            <input className="form_input" type='text' id="tvShow" placeholder='Type the TV Show Name'></input>
                            <button className="form_btn" type='button' onClick={searchActress}>Search</button>
                        </form>
                    </div>
                    <div className='search_content_return'>
                        <div className='search_content_return_img'>
                            <img></img>
                        </div>
                        <div className='search_content_return_info'>
                            <p className='return_info_text'>{valorInicial}</p>
                        </div>
                    </div>      
                </div>
            </div>            
        </section>
    )
}

export default MainSearch;