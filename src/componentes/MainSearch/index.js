import React from 'react';
import './style.css'
import Search from '../Search';
import { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react';


function MainSearch (props) {

    const inputRef = useRef(null);
    const hideDiv = useRef(null)
    const [initial, final] = useState('')

    // hideDiv.current.classList.add('hideDiv')

    function getShow() {
        let showName = inputRef.current.value;
            if (showName != '') {            
                let apiKey = `http://www.omdbapi.com/?t=${showName}&apikey=908b934c`;
                let res = fetch(apiKey)
                    res
                    .then(resp => resp.json())
                        .then(dataShow => {
                            console.log(dataShow);
                            let nameActress = dataShow.Actors.substring(0, dataShow.Actors.indexOf(' '));
                            const result = fetch(`https://api.genderize.io?name=${nameActress}`);
                                   result
                                   .then(reponse => reponse.json())
                                        .then(data => {
                                            if(data.gender == 'female'){
                                                console.log(`${nameActress} é uma atriz`);
                                                let onAirTest = '';

                                                if(dataShow.Year.length <= 5){                                                   
                                                    onAirTest = "Yes, it's still airing.";
                                                } else {
                                                    onAirTest = "No, it's finished already.";
                                                }
                                                
                                                const infoShow = {
                                                    poster: dataShow.Poster,
                                                    title: `Title: ${dataShow.Title}`,
                                                    actors: `Actors: ${dataShow.Actors}`,
                                                    genre: `Genre: ${dataShow.Genre}`,
                                                    plot: `Plot: ${dataShow.Plot}`,
                                                    totalSeasons: `Total Seasons: ${dataShow.totalSeasons}`,
                                                    year: `Year: ${dataShow.Year}`,
                                                    onAir: `Currently Airing: ${onAirTest}`
                                                }

                                                final(infoShow);

                                                console.log(`${nameActress} é uma atriz ${infoShow}`);
                                                console.log(infoShow);

                                            } else {
                                                const infoShow = {
                                                    response: `Sorry, but this show isn't rulled by a girl. Please, try another.`
                                                }

                                                final(infoShow);
                                            }
                                        })
                                        .catch(erro => console.log(erro));
                        })
                    .catch(erro => console.log(erro))
        }
    }     

    return (
        <section className='search'>
            <div className='container main_container_search search_box'>
                <div className='search_content'>
                    <div className='search_content_form'>
                        <form className="form" action=''>
                            <input ref={inputRef} className="form_input" type='text' id="tvShow" placeholder='Type the TV Show Name'></input>
                            <button className="form_btn" type='button' onClick={getShow}>Search</button>
                        </form>
                    </div>
                    <div className='search_content_return_positive'>
                        <div className='search_content_return_img'>
                            <img className='img_return' src={initial.poster}></img>
                        </div>
                        <div className='search_content_return_info'>
                            <p className='return_info_title'>{initial.title}</p>
                            <p className='return_info_text'>{initial.actors}</p>
                            <p className='return_info_text'>{initial.genre}</p>
                            <p className='return_info_text'>{initial.plot}</p>
                            <p className='return_info_text'>{initial.totalSeasons}</p>
                            <p className='return_info_text'>{initial.year}</p>
                            <p className='return_info_text'>{initial.onAir}</p>
                        </div>
                    </div>
                    <div className='search_content_return_negative'>{initial.response}</div>  
                </div>
            </div>            
        </section>
    )
}

export default MainSearch;