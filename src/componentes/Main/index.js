import React from 'react';
import './style.css'
import About from '../About';
import Shows from '../Shows';
import Info from '../Info';

function Main () {
    return (
        <section>
            <About/>
            <Shows/>
            <Info/>
        </section>
    )
}

export default Main;