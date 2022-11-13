import React from 'react';
import './style.css'
import Search from '../Search';
import { useState, useEffect, useRef } from 'react';
import { ReactDOM } from 'react';


function MainSearch (props) {

    const inputRef = useRef(null);
    let [value, newValue] = useState('')

    const api_key = 'b802fbd3e36b896f1ab90e5265d94830';

    function getShow() {

        //achar o nome da atriz
        let showName = inputRef.current.value;

            if (showName != '') {
            const result = fetch(`https://api.genderize.io?name=${showName}`);
            result
                .then(reponse => reponse.json())
                    .then(data => {
                        if(data.gender == 'female'){
                            console.log('É uma atriz');
                        } else {
                            console.log("Sorry, but this show isn't rulled by a girl.")
                        }
                    })
                .catch(erro => console.log(erro))

            let apiKey = `http://www.omdbapi.com/?t=${showName}&apikey=908b934c`;

            let res = fetch(apiKey)
            res
                .then(resp => resp.json())
                    .then(dataShow => console.log(dataShow.Actors[0]))
                .catch(erro => console.log(erro))
        }
    }


    // if (name != '') {
    //     const result = fetch(`https://api.genderize.io?name=${name}`);
    //     result
    //         .then(reponse => reponse.json())
    //             .then(data => console.log(data))
    //         .catch(erro => console.log(erro))
    // }

    
    // async function searchName (value) {
    //     try {
    //         const result = await fetch(`https://api.genderize.io?name=${value}`);
    //             result
    //             .then(reponse => reponse.json())
    //                 .then(data => console.log(data));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    // searchName(value);        

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
                    <div className='search_content_return'>
                        <div className='search_content_return_img'>
                            <img></img>
                        </div>
                        <div className='search_content_return_info'>
                            <p className='return_info_text'></p>
                            <p itemID='testeRoot'></p>
                        </div>
                    </div>      
                </div>
            </div>            
        </section>
    )
}

export default MainSearch;